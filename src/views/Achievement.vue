<template>
	<img :src="'https://cdn.cloudflare.steamstatic.com/steam/apps/' + $route.params.id + '/header.jpg'" />
	<div v-for="obj in ach_list" :key="obj.id">
		<span>{{ obj.name }}</span>
		<span style="color: red">：</span>
		<span v-if="obj.description.length != 0">{{ obj.description }}</span>
		<span v-else>--------爷是锁定成就--------</span>
		<p></p>
	</div>
</template>

<script>
	import AppDetail from '@/components/AppDetail.vue'
	import Global from '@/Global.vue'

	export default {
		name: 'Home',
		components: {
			AppDetail,
			Global,
		},
		data() {
			return {
                ach_list:[]
			}
		},
		created() {
			this.axios({
				method: 'GET',
				url: 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?appid=' + this.$route.params.id + '&key=' + Global.steamkey + '&steamid=' + Global.steamid + '&l=' + Global.language,
			}).then((res) => {
				this.ach_list = res.data.playerstats.achievements
				console.log(this.ach_list)
			})

            console.log(ddss);
		},
	}
</script>


<style>
</style>