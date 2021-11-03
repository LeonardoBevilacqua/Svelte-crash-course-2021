<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
		},
		{
			id: 2,
			rating: 9,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
		},
		{
			id: 3,
			rating: 8,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi, natus quibusdam sapiente deleniti perferendis vitae assumenda non a eveniet accusamus neque aliquam quos harum facere quod, maxime quisquam rerum.",
		},
	];

	$: count = feedback.length;
	$: average =
		feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length;

	const addFeedback = (e) => {
		const newFeedback = e.detail;
		feedback = [newFeedback, ...feedback];
	};

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id !== itemId);
	};
</script>

<main class="container">
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
