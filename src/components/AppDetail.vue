<template>
	<div>
		<van-cell :to="/achievement/ + id" :border="false">
			<template #value>
				<img :src="'https://cdn.cloudflare.steamstatic.com/steam/apps/' + id + '/header.jpg'" />
			</template>
		</van-cell>
	</div>
</template>

<script>
	export default {
		props: ['id'],
	}
</script>

<style scoped>
	img {
		width: 360px;
	}
</style>

