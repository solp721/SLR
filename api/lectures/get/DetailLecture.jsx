export async function fetchLecture(lectureId) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_LECTURE_API_URL}/detail?lectureId=${lectureId}`,
		);
		if (res.status === 200) {
			const json = await res.json();
			const lecture = json.data;
			return { lecture };
		} else {
			console.error('!!!', `${res.status}`);
			return { lecture: null };
		}
	} catch (error) {
		console.error('!!!', error);
		return { lecture: null };
	}
}
