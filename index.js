const cardBox = document.getElementById('innerDiv')
const body = document.querySelector('body')
const pointsCounter = document.querySelector('h1')
const statusBar = document.querySelector('h2')

let cards = []
let points = []
let hp = []




const allInfo = [

{
extra_life:0,
points:110, 
img:'https://lj3wtq.ch.files.1drv.com/y4mZdAKwlq4brCcZx6T4B7TYWNQlSkF6TLf-Wtyv_LozQdU-U_xHaWcE9TcwVEUMohaZIH_QAmN-snliycAqoKb1ueguooglbNo4a6XspxuQiTLtt9rBCrWmvplFtuzSisOOISfmaC7WaAk2eZ5Zq4emcImmJaOcciPvuUmiBXRESkcXccoQ64FTjVnbHoSGvkwPMV4JXXTqi106oNva7IO3g?width=368&height=525&cropmode=none',
   
},
{
    img: 'https://j53wtq.ch.files.1drv.com/y4mAeW_stbl8cZVGm0kTYhmRjrHRK3kT2Vd4BqdP70ep1US7mn-zT25KqmWZEQFv-EKH_dZ9Mf8955KuJf6ozBJzA9sdxkmnSOhNlZUTfbs6Lb9V3O9sG1A-au5sRoJngAjP5qMdZGTWNqBlOXYRi-jePYAqEAGlneD5jYG78f7n5MgJ7-NfZRBbkwFeSC5U8588dvTdD09fCPgf2Cg3ISuIw?width=368&height=525&cropmode=none',
    points: 0,
    extra_life: -2
},
{
    img: 'https://lz0mnw.ch.files.1drv.com/y4mZBbut6Og51ECJ6qn1tuXNRh74nslO74sOFf_iKP6uD9PpaY8WG-MX7qtIgOZheQYPsT54Qy5QW_gRRJJ_AwzP6XwEfEQoiXBdtR-FG2o13ztoMW4EJgb9_XxCO6mmj8j2nCNqPbcbVDSxA36VFCTNgWIWOAMDvidKn5tIsUcyh0FNqAV0ST4K-DZVnmPspRcUY9Lx3-sTqAw_fZOcqOWBQ?width=969&height=1352&cropmode=none',
    points: 0 ,
    extra_life: -1
},
{
    img: 'https://zhfbka.ch.files.1drv.com/y4mPB6VRVTiMjcHhA3jdUITDEQ3UNdnRQmu9CZHR2HazUwIBVD03-j4sovhcD_LnJ4O6XF_XJ4fb_hR6kXoUcjuwV2FJa-4tEk3rUEU0htsz-KF2t-506U5M-Gsj34VPs1GOTARLcsJwdH2zJc7axyw7BWiN6beIcb3bLAwN8CSxvNw90XJqmb-Xh4I_ZblJiik8_LLa7Es9v_hE4Wc4Rv2ug?width=368&height=525&cropmode=none',
    points: 100,
    extra_life: 1
},
{
    img: 'https://kz3wtq.ch.files.1drv.com/y4m9m0eisoQWNZOrQVYZivCHlRbwUEwWfc6CxtpxSxX1riKCZyWe2o7dbr_32Q69uCFduwqrCPz35adZ_nFhTvg48dh1VrAYFihTWk60roEuXHRRBrKgWNYQlw3XbyBE6lFCRciEWnik9ja0RcUJfUStwl4RD_doGFfBjmauc7KfzsZV9SnAB4xG39uPXBiWyEJtk41DAZDoPw-l0UwSPWB6w?width=368&height=525&cropmode=none',
    points: 0,
    extra_life: -1
},
{
    img: 'https://kz3wtq.ch.files.1drv.com/y4m9m0eisoQWNZOrQVYZivCHlRbwUEwWfc6CxtpxSxX1riKCZyWe2o7dbr_32Q69uCFduwqrCPz35adZ_nFhTvg48dh1VrAYFihTWk60roEuXHRRBrKgWNYQlw3XbyBE6lFCRciEWnik9ja0RcUJfUStwl4RD_doGFfBjmauc7KfzsZV9SnAB4xG39uPXBiWyEJtk41DAZDoPw-l0UwSPWB6w?width=368&height=525&cropmode=none',
    extra_life: -1,
    points: 0
},
{
    img: 'https://k52lkg.ch.files.1drv.com/y4movbOZirdqWW0YP-8ECBOdJyZxG8ku_TIA_wVYy8pbdvMec3lrr8E0AQuMe2gewOA9EFfMapJXf-kBAPZc0lFvT4K9B_Vt2J343uu4BQhEOzPHBYrg3Tv92uKYF6AFWBKWEjIssQMflNIh1iyF9h4VdmQmcUbqQ2uYjKg5V8-qmlquDVEafNqE3vS4Y1pXYmOnTsFGVX3sFD3u9aQFafibQ?width=368&height=525&cropmode=none',
    extra_life: 1,
    points:2
},
{
    img: 'https://lj0mnw.ch.files.1drv.com/y4mVrYmOLe2oYehaayVXRhGiZibCe-j3STuZ5yZcmRR0WG2YbyKTMEc_jWudZ-iBY9Za_YZv1Y0894Lk7jmlFpTMDwlvYHwC-Gkxp0nwC5i08ov-4WQZ0fcahqGdrvLIiZEWjdbflRmqd_YQY7gfKJB5R98FpCN9a7jn_kqbrZh9zttlY3yM2pzZHaZPNKXZO0ZHwEwm_ikw2RhdnY4ldGY2g?width=969&height=1352&cropmode=none',
    extra_life: 1,
    points: 80
},
{
    img: 'https://k50mnw.ch.files.1drv.com/y4mdfyw04IhdFKt3NqZeb8zthrO8H0DNqcXSz66pp2dgX99jvEYwj2zmFLI39JLMnIzjCfYeHg4v0oJdfpIeqMgpbbqX74oAc2QOE6hc63KGTjsxyNzqgTLPbumVtO4Fx1K8TepjbVQ8x8uqBGhMxlPubRWD09ntFIF9FhbuzwICuRecG8SpNgOJT79hX-l44gIbf3PjaDoUM-PyR6Jm4y9HA?width=969&height=1352&cropmode=none',
    extra_life: 1,
    points: 50
},
{
    img: 'https://wxfbka.ch.files.1drv.com/y4m-qgEK1cmHiZVIHTcT05R4oxG0-eHGAslxAWoIvu6NkEv2DWB2oaq0HDzYrHCiy83PFH4OyK1CKMlajYWgMK22KfIQ5lWyTpUNYKFAYI8Fo8aflSfk79kyCcWy92DdwZ6yacGgiQ5_DPaneWNeOn15WReIRi9BZ-0Sa-BrjmiMDIZToRCX9P-puifEGnT2kEaqeyJpZaMZqit8ohdUyH39Q?width=368&height=525&cropmode=none',
    extra_life: 1,
    points: 30
},
{
    img: 'https://kj3wtq.ch.files.1drv.com/y4mrg00n-nCYRSgq5qvBp4oT7cUJusk6YLRECTIRq3wo8aZt9PTM1gtlBD5_2yKA7sK79bagwtuXJqQ5p_Byd8EzOPMRZhgUuWoAg2tyCzL5YYbVIs5A0l4cZWGml11nlXqubs2zAeowqCxk2UXCKsHziwLcRhGhwdk117_FydQlpVAXfdJHcII8xNC9mdNMhojsmpMLMJsE_Zz1dTIar0qVQ?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 70
},
{
    img: 'https://kp0mnw.ch.files.1drv.com/y4m97S2pg3rE6UtPwolW16l9nXnfIAKYogBrmVjKyJKWO1KS3dGhDroWIH6hIOwLzWvhELWKzb9vRcvV2M-Uo6S6zWs9o4-2vstKcxwf-usnqyFrMvsDpmpy59TJ92CU_EfrTTPmGce21mE4UFOgCAVyFb0VpE77FGJGidCDvXSbGxf7OnNcnNjfUbcKhHN3GNRS02okVlpYbln0yWOw7x72Q?width=969&height=1352&cropmode=none',
    extra_life: 2,
    points: 1000
},
{
    img: 'https://lz3wtq.ch.files.1drv.com/y4m2ZZqrHq_YVM8uNiix8Xsf2QHE3JWvSasI0lwkNib1FukTKf5-kIgpXrTSPPM44vwNPRih75I8uKsLiOKBcYXzUH47LuB3vzgB3_-UESONBTCysUFDpC_AFvUwVrym29-zu5Ob_ls_BZhZbtkHJ99NdD_cQmhuFWwh8B4uhiGbY6a23vkrBRnToKajrP5uAZaQGNNyhA64egLS8tGdLP9zw?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 50
},
{
    img: 'https://mp2lkg.ch.files.1drv.com/y4mW_VtkAQYCXF-rOTIKcWvg6klykVvlrlwNP4dkB2tuTxz_rtt-wjz4HqVlViIqLmq4tdxEzEtPYTu9PFV1w0LsFBPnuyxvh0yxBx-YMqgqSiYDAVRpg-jpVbUMopXW7G01JqbgSUbl9lpz3aEtW2Q_z6tAxwKpeZ7eyoBg9XOdBx6pjD2Rrz5LcbGeSgqSE6LPP_rHEwgTaZ0wuZlJADYaQ?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points: 200
},
{
    img: 'https://lj2lkg.ch.files.1drv.com/y4mlgB4pgdrAGal6ODULW5362Pc2K0_cWMJMgkn-fODu3H_umXmPPKKecKbSlMX6P2iM7-lmSQwgF-5dnNuUNY0KGpZuBS3CxZIyPVi7tVmE1j-mHRvRKfHCN3s-T-g6eKE-KVaWSprOxO25yT3Xk64Q07rI7HTCNePMQlhH-hl7r6NDU89_GmAFxGZzpJbithQPtByLgQV6W6HwTZfNsWLnQ?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 120
},
{
    img: 'https://j52lkg.ch.files.1drv.com/y4mZnCD4bvUgxLqmSATNht0OznRpa_qnMvZQ38l1knDCXlfx_r488JcHDdSVEuHl2AZRpv0q-xN0bRIUH2yIzL82eBEXehFvgSuQ3u4LepFfHWgyBwyxHPRSzXR5--AuVz_wFsPRHIjawXOO0E2dSPCnA--jqF5R7Q2hOJpbudXiKMFC-dW498hEJJx6uoB9kKIGzXRea1dNSIASMaLd9D7fw?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points: 300
},
{
    img: 'https://jp3wtq.ch.files.1drv.com/y4mNxxV0RLcgMsjF39ThXlLdG-fCbA_ksSYgi6ylnw9xTtiOW68Vd-JzATQ__CkAjiL9F5jurAy3vOyf0t6LmmJfhc2CCboLvU5rbXQGq58m_1uzWpmj2IPZZXuW1w8TPfTFYYsQ-zqDKTBxeu5Bk6S_z1zKBuHGb40UcAA6zu515rxfzp4LAbYAAb7wJAgejaxdng5-upQ5gCpbGl4HAjB2g?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 100
},
{
    img: 'https://kz2lkg.ch.files.1drv.com/y4mcr1JSxKEw154V6ec1Nb8HNyfAgb-NZG5Si-sDu4mujfAK6zpkoHa0VyKVzK5iheZf7h1JD0ZcDf5AyxkuP-8ICkfoim57IJrpFwvzzZAob3_fe5LkGzp3hupDK83fjbH37egVrM-qDKWVWY6PEjDGEQgf5r9SeKQ7jVVePDClQBYdVZgzqGHa-2V5XjQ9-Psl67DoTFVky4KP-93dqsJWg?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points: 400
},
{
    img: 'https://whfbka.ch.files.1drv.com/y4mXaisgfMvk_s3khDyV-TPKf4DkBfl4uLYgAdBjdJeomqN08X9W1aiPhnqN3Yiwylrhyqs71wsss-4CZl4ByCilL2kJ9o62o9Ge5IYfPOLXUx9JP0nvQKXYBigK5RojhKxTCHiWSwuNYZI_32WdReY1RCxv2M8xmmoyzLyBTeYaK7j-_IX-OEhZ30iH-zJNai8V5fSoMRsGZInvi5NzguTGQ?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 32
},
{
    img: 'https://kp2lkg.ch.files.1drv.com/y4m98fZ_vg-VB63PXPl9uU1HbcQmxquGaEtcqrtS3uS809C-bTp8IAhZe5h5cCt3EVplYyIpW2O6Sy1jEe9L_n4gVjrU5TmQWYsmlLpXUdKH_yo9S9OF0qhGAMHFp83yh8NQwYplz6I9OmWH7rJdSmXusiSHwNJznf-gNitM-YvSY1R5E2GXFZ_qbzyACB4ZRfRQ8dqOSPED7NdKdNasjb-vw?width=368&height=525&cropmode=none',
    extra_life: -1,
    points: -50
},
{
    img: 'https://kp2lkg.ch.files.1drv.com/y4m98fZ_vg-VB63PXPl9uU1HbcQmxquGaEtcqrtS3uS809C-bTp8IAhZe5h5cCt3EVplYyIpW2O6Sy1jEe9L_n4gVjrU5TmQWYsmlLpXUdKH_yo9S9OF0qhGAMHFp83yh8NQwYplz6I9OmWH7rJdSmXusiSHwNJznf-gNitM-YvSY1R5E2GXFZ_qbzyACB4ZRfRQ8dqOSPED7NdKdNasjb-vw?width=368&height=525&cropmode=none',
    extra_life: -1,
    points: -50
},
{
    img: 'https://m52lkg.ch.files.1drv.com/y4mo31XKQbrg4EURgKqo_T7UJ9BMPFDBBHZ9ufMdxY0ZBty053yK7HdvXvSjINdEpU5_PiLFhquMRw4d5zd8mrIPrGBMk-HI4-SdPYIedNSY9KIeu8Ha7LPBsPCVaOWkNkVLNo8zNG29plUTxpU44bk8RPNJ2J82U70bMSXz1dFvqltix7QoNKUxFz37qp0aPPovlwChYVgHnjTRoyp2SJsHQ?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points: 15
},
{
    img: 'https://kp3wtq.ch.files.1drv.com/y4m3p0s-0ViLtEPV32m3mrZwlT_f2QPcizYO46OWOaPS-bOboed8VOs9cNkzhayaIlsejZau34wMoqwg6Mltldsjv88lUJznqjC4AcHYTzVg4RunExR34IgivcNVY0lPL0awLDbghOYed67rSx04yHncDDHClRhsOpcA89J519DjozJZn8XwcMPwpOZytXt_2z_s-nuZxFuBzZnFOFxHlztfg?width=368&height=525&cropmode=none',
    extra_life: -1,
    points: -20 
},
{
    img: 'https://m53wtq.ch.files.1drv.com/y4mRHpkmFT2kISPs1uXWmJkAas5HVWBH87xPpDMgPRARqvdx9iaU6Gzul6VQsB8boWtUbeCMl8xI1s1wVyzx4PcgKlrKKLmIHrpbcQR-tbOEg1e7RFzeL2IdlhZ-cdjNjA4MWwNZVbYCcUT1_D5SRLy11WPY9qZzipkBLi-4EEtET_LSona4C-Y7ICAla4NOTS_EorrQ7L9jXa29w6k9EZXww?width=368&height=525&cropmode=none',
    extra_life: 0,
    points: 70 
},
{
    img: 'https://k53wtq.ch.files.1drv.com/y4mXCV-SR_ho7NRvvLx2flQ9-EWfuVKZn7FetQfY4BJAGAsk-gBKKTeHAUig7YRfc16ziHU_QOn2rqr-riTv6qAXBI4v82FITvC0xlH73dpzLLAQ-m77RKkhY7TJgJaT13gDqx5Ulm1U2d3z8TRgvIE4fNfll53Ejwz01gwqD2_AESOt2wjj9WXHlp0AqQjdH6EK_wvIBSD0SWclSCpPte4Qw?width=368&height=525&cropmode=none',
    extra_life: 0,
    points:10  
},
{
    img: 'https://jp2lkg.ch.files.1drv.com/y4mvH9S-9i4yNTQPd9V1lamdGYZZK6NwjtMPxA40-KxxpIu1oGdWCbj40ze3tJ6xtXfIFL7nwZJRllZog4xPV82NvrfZVYQSCOEr_dljv-ZnCJJ4rjwjT22InwdXRq3gS_HwhtYkM76f_eWY7lDd1DEOppiDrfsyWJl2NNH8TQ2zi_e0URKAGzpJzzdLu602qsjWOIovFuY1FNxSYCL0tumZA?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points:  120
},
{
    img: 'https://zrfbka.ch.files.1drv.com/y4mJHfHzJnOzGTFGAoitHacKtr-5GYJydROvaZehETdL4AaZyNykQE8CzviaH8j_zq1G0KdAYKOqFcCDq-ljgNPrZ_QZwbWVdcx7xgG18GlZHX0ywkflhc3jez4EzjeYGy-ncXscjqK_0YaMyy1EZY0l-5-mKAldGdM0ck-TaVpPXYzsSRxrLISb8thNMcMj6ya72yu8ivDRrtFvTCahtaBAg?width=368&height=525&cropmode=none',
    extra_life: 0,
    points:  200
},
{
    img: 'https://lz2lkg.ch.files.1drv.com/y4mYtKu0Px-jLuyXI7594z4_xKQm81A-ANR6X8v609V_UnKs2nN0lMUhuTLEDA3lzfXfmjq_BNXNZ33sw0z0QLDfGTdl2cxHMMzwy4YfN5aEU0frQLic9YAhPMBl4swrUiWg0ad_qszk8tciHzlmE48iNU1TskdhJyzP5C-Mnmlo2gN3KqnE188gTCRdkZRXfJ57hC4-Lsdol-EnJGBLtuFiA?width=969&height=1352&cropmode=none',
    extra_life: 0,
    points:  37
},
{
    img: 'https://xbfbka.ch.files.1drv.com/y4ms4vx5Vn0WVLhATHKC2lqOURKdsfhBBR50a52aLNsC_Ek1l8H61ztQI0zJUbltv0h9K15xOPgTQNCo9AtlEf9UziE5dtTIEtQmIyca9IxGfKlqrMakJDRDDaDNq7dsxvcIay6dULhzbzUW8weNMDClwlE-h_oZifM0uLKuXdBx0RH4Rs3Hx5oT-Y0cYICad23CSU6Y0QE7qte103delsaNg?width=368&height=525&cropmode=none',
    extra_life: 0,
    points:  200
},
{
    img: 'https://xbfbka.ch.files.1drv.com/y4ms4vx5Vn0WVLhATHKC2lqOURKdsfhBBR50a52aLNsC_Ek1l8H61ztQI0zJUbltv0h9K15xOPgTQNCo9AtlEf9UziE5dtTIEtQmIyca9IxGfKlqrMakJDRDDaDNq7dsxvcIay6dULhzbzUW8weNMDClwlE-h_oZifM0uLKuXdBx0RH4Rs3Hx5oT-Y0cYICad23CSU6Y0QE7qte103delsaNg?width=368&height=525&cropmode=none',
    extra_life: 0,
    points:  200
},
]


// fetch('http://127.0.0.1:3000/cards')
fetch('https://pokeapi.co/api/v2/')
.then(response => response.json())
.then(store)

function calcPoints(info){
    newPoints = info.reduce((a, b) => a + b, 0)
    return newPoints
}


function store(response){
    cards = response;
    makeCards(cards);
    makeMusicButton();
}

function makeCards(){
    var i
    for(i = 0; i < allInfo.length; i++){
    const card = document.createElement('div')
    const cardImg = document.createElement('img')
    card.className = 'oneCard'
    cardImg.src = 'card_back.png'
    cardImg.className = "cardImg"
    card.append(cardImg)
    cardBox.append(card)
    }
}

let musicStatus = "off";
function makeMusicButton(){
    const header = document.querySelector('header')
    const musicButton = document.createElement('button');
    musicButton.textContent = "Play Music";
    musicButton.id = "musicButton";
    header.appendChild(musicButton)
    
    music = new Audio("./music.mp3")
    musicButton.addEventListener("click", controlMusic);
}

function controlMusic(){
    if(musicStatus === "on"){
        pauseMusic();
    }else{
        playMusic();
    }
}
// function controlMusic(){
//     console.log("howdy doody")
//     if(music.className === "off"){
//         playMusic();
//         music.className = "on"  
//     }else if(music.className === "on"){
//         console.log("test")
//         music.pause();
//     }
// }

function playMusic(){
    music.play();
    music.volume = 0.5;
    musicStatus = "on";
    musicButton.textContent = "Pause Music";
}

function pauseMusic(){
    music.pause();
    musicStatus = "off";
    musicButton.textContent = "Play Music"
}
cardBox.addEventListener("click", flip)

function playSound(){
    const sound = new Audio('card_flip.mp3');
    sound.play();
}

function flip(event){
    const {className} = event.target 
    if (className === "cardImg" && calcPoints(hp) > -1){
        playSound()
        const randoPic = allInfo[Math.floor(Math.random()*allInfo.length)]
        points.push(randoPic.points)
        hp.push(randoPic.extra_life)
        event.target.src = randoPic.img
        event.target.classList.toggle('flipped')
        calcPoints(hp)
    } 
    if (calcPoints(hp) < 0 && calcPoints(points) === 0){
        pointsCounter.textContent = 'The Exalted One laughs at your inability to aquire points.'
        statusBar.textContent = "You've died, and your culting days are over before they even truly began"
        alert("News From The Exalted One, He Who Knows All: Spoiler Alert, You Did The One Thing I Told You Not To")
        gameOver()
    }else if(calcPoints(hp) < 0){
        pointsCounter.textContent = 'The Exalted One claims your points.'
        statusBar.textContent = "You've died, and your culting days are over"
        alert("News From The Exalted One, He Who Knows All: Spoiler Alert, You Did The One Thing I Told You Not To")
        gameOver()
    }
    else if(calcPoints(hp) === 0){
        statusBar.textContent = `You've only got one life, cult with care`
        pointsCounter.textContent = `You have ${calcPoints(points)} points, you go glen coco`
        
    }
    else{
        statusBar.textContent = `You've got ${calcPoints(hp)} extra lives. You're doin really great bud, keep on culting`
        pointsCounter.textContent = `You have ${calcPoints(points)} points, you go glen coco`
    }
}

function gameOver(){
    const message = document.createElement('div')
    const gameOver = document.createElement('h1')
    const punch = document.createElement('h2')
    const refresh = document.createElement('h3')
    message.className = 'message'
    gameOver.textContent = 'GAME OVER'
    punch.textContent = 'You Drank One Too Many Punches'
    refresh.textContent = 'Refresh the Page to Be Born Again'
    message.append(gameOver,punch, refresh)
    cardBox.appendChild(message)
}
// function makeCards(){
//         var i
//         for(i = 0; i < allInfo.length; i++){
//         const card = document.createElement('div')
//         const cardImg = document.createElement('img')
//         card.className = 'oneCard'
//         cardImg.src = 'card_back.png'
//         cardImg.className = "cardImg"
//         card.append(cardImg)
//         cardBox.append(card)
//         }
//     }

 
