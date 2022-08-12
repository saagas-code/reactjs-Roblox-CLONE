import axios from "axios";

export const api = {

    Register: async (email: string, user: string, passwordd: string, day: number, month: string, year: number, gender: string) => {
        let response = await axios.post("http://localhost:8819/register", {
            email, user, passwordd, day, month, year, gender
          });
        return response.data
    },
    Login: async (email: string, password: string) => {
        let response = await axios.post("http://localhost:8819/login", {
            email, password, 
          });
        return response.data
    },
    Logout: async () => {
        return{status:true}
    },
    Request: async (email: string) => {
        let response = await axios.post("http://localhost:8819/request", {
            email,
        });
        
        return response.data
    },
    RequestGames1: async () => {
        let response = await axios.get("http://localhost:8819/requestGAMES1")
        return response.data
    },
    RequestGames2: async () => {
        let response = await axios.get("http://localhost:8819/requestGAMES2")
        return response.data
    },
    RequestGames3: async () => {
        let response = await axios.get("http://localhost:8819/requestGAMES3")
        return response.data
    },
}














export type PropGames = {
    name: string ,
    link:string,
    like: string ,
    players: string,
    img: string,

}
export type tmpItems = []


export const games1: PropGames[] = [
    {name:'Anime Fighters', link:'AnimeFighters', like:'93', players:'48.6', img:'https://tr.rbxcdn.com/1397250e86656bdae1a51ceb67162c5f/150/150/Image/Jpeg'},
    {name:'Mighty Omega', link:'MightyOmega', like:'87%', players:'899', img:'https://tr.rbxcdn.com/88a33cc6778d785010e21b5ccdb3770e/150/150/Image/Jpeg'},
    {name:'Super Power Training', link:'SuperPowerTraining', like:'73k', players:'1.5', img:'https://tr.rbxcdn.com/fb622b0fb3ee64683167e41be705c8b0/150/150/Image/Jpeg'},
    {name:'Bee Swarm Simulator', link:'BeeSwarmSimulator', like:'94', players:'11.8', img:'https://tr.rbxcdn.com/e2b0e107193c917e2de281bbcb951487/150/150/Image/Jpeg'},
    {name:'Anime Batalha Arena', link:'AnimeBatalha Arena', like:'84', players:'15.4', img:'https://tr.rbxcdn.com/ee05a217f018f6d7829e5542b25dbdcc/150/150/Image/Jpeg'},
    {name:'Weapon Fighting', link:'WeaponFighting', like:'94', players:'23.9', img:'https://tr.rbxcdn.com/6a2c3278822f0b200da7b1c2a747ca66/150/150/Image/Jpeg'},
    {name:'Clicker Simulator!', link:'ClickerSimulator!', like:'95', players:'21.1', img:'https://tr.rbxcdn.com/921af10f8a83853419ff009c15354263/150/150/Image/Jpeg'},
    {name:'Fablet Evento Button', link:'FabletEventoButton', like:'78', players:'1.5', img:'https://tr.rbxcdn.com/e20e6f5f57cf192bfa58546607895ae2/150/150/Image/Jpeg'},
    {name:'Rise of Nations', link:'Riseof ations', like:'86', players:'1.7', img:'https://tr.rbxcdn.com/dc3d21e6afc2eae0cbb4f639c3ad0550/150/150/Image/Jpeg'},
    {name:'Rebirth Champions X', link:'RebirthChampions X', like:'95', players:'6.9', img:'https://tr.rbxcdn.com/3f4297edd2f6edf14348138b89ca11ff/150/150/Image/Jpeg'},
    {name:'Retail Tycoon 2', link:'RetailTycoon 2', like:'88', players:'2.7K', img:'https://tr.rbxcdn.com/9c7d16ed0af8b574a1e71967db80f887/150/150/Image/Jpeg'},
    {name:'World Zero', link:'WorldZero', like:'94', players:'3K', img:'https://tr.rbxcdn.com/b37dfff9807a03cc41a75d09cb156679/150/150/Image/Jpeg'}
];
export const games2: PropGames[] = [
    {name:'3008 [2.7]', link:'3008', like:'92', players:'30.7', img:'https://tr.rbxcdn.com/82e90c49ce90c785aa82a62a9e046d62/150/150/Image/Jpeg'},
    {name:'Construa Um Barco por', link:'ConstruaUmBarcopor', like:'92', players:'18.4', img:'https://tr.rbxcdn.com/167ecbd73cb1359c65671d3acae60775/150/150/Image/Jpeg'},
    {name:'CANDYLAND', link:'CANDYLAND', like:'82', players:'18.7', img:'https://tr.rbxcdn.com/518381ced8bd0ed7838e28fad07bc19b/150/150/Image/Jpeg'},
    {name:'Clicker Simulator', link:'ClickerSimulator', like:'95', players:'22', img:'https://tr.rbxcdn.com/921af10f8a83853419ff009c15354263/150/150/Image/Jpeg'},
    {name:'MeepCity',link:'MeepCity', like:'87', players:'23.1', img:'https://tr.rbxcdn.com/9a22e6fdf7c696d455b4e5b3ca382c33/150/150/Image/Jpeg'},
    {name:'Tower Defense', link:'TowerDefense', like:'93', players:'10.3', img:'https://tr.rbxcdn.com/f8ec20520f555282c4d8923f38dc1c56/150/150/Image/Jpeg'},
    {name:'Break in', link:'Breakin', like:'90', players:'6.1', img:'https://tr.rbxcdn.com/2eba303db92e4d842c80bdf1e3072b7f/150/150/Image/Jpeg'},
    {name:'Murder Mystery 2', link:'MurderMystery 2', like:'92', players:'24.9', img:'https://tr.rbxcdn.com/fb552486d3254f1c2dc1af92be768082/150/150/Image/Jpeg'},
    {name:'Simulador de estrelas', link:'Simuladordeestrelas', like:'81', players:'1.9', img:'https://tr.rbxcdn.com/072e4da06dba0b3ab3fa36de3cca51c0/150/150/Image/Jpeg'},
    {name:'The Mimic', link:'TheMimic', like:'91', players:'7.5', img:'https://tr.rbxcdn.com/42b9a9abab1df65713dcba8e37b91b69/150/150/Image/Jpeg'},
]
export const games3: PropGames[] = [
    {name:'Simulador de Guerreiros', link:'SimuladordeGuerreiros', like:'97', players:'5.5', img:'https://tr.rbxcdn.com/462511d51623fbafe4c402f3b405d284/150/150/Image/Jpeg'},
    {name:'Speed Run Simulator', link:'SpeedRunSimulator', like:'95', players:'1.3', img:'https://tr.rbxcdn.com/a784a07f78b0c36a998012863b13b991/150/150/Image/Jpeg'},
    {name:'VoteKick.io[BETA]', link:'VoteKick.io', like:'54', players:'5', img:'https://tr.rbxcdn.com/48decee040b7cfd62737dd33de2c352e/150/150/Image/Jpeg'},
    {name:'[GODZILLA 2019] Kaiju', link:'GODZILLA2019Kaiju', like:'88', players:'9.5', img:'https://tr.rbxcdn.com/afa194f4227d11f6103980aa587967f2/150/150/Image/Jpeg'},
    {name:'[CODE] Carcraft', link:'Carcraft', like:'92', players:'101', img:'https://tr.rbxcdn.com/a18e3e2b87a63be4bb869ed671cb8238/150/150/Image/Jpeg'},
    {name:'The troubles', link:'Thetroubles', like:'80', players:'1', img:'https://tr.rbxcdn.com/87de380e6a0f3c00bbfa8b4bddf19e86/150/150/Image/Jpeg'},
    {name:'Food Runner', link:'FoodRunner', like:'41', players:'3', img:'https://tr.rbxcdn.com/877d9d3e0c1cb72fd099b44826281374/150/150/Image/Jpeg'},
    {name:'Broken Bones Simulator', link:'BrokenBonesSimulator', like:'75', players:'10', img:'https://tr.rbxcdn.com/853c0433a129db3042d0c17e1a414127/150/150/Image/Jpeg'},
    {name:'Tanks! Helicopters!', link:'TanksHelicopters', like:'64', players:'56', img:'https://tr.rbxcdn.com/448f082ad314612da80b8e4524e9c522/150/150/Image/Jpeg'},
    {name:'Notoriety', link:'Notoriety', like:'91', players:'347', img:'https://tr.rbxcdn.com/694b854a853703e948a104a00f1e524c/150/150/Image/Jpeg'},
]