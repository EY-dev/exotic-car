<template>
    <div class="cars">
        <div class="top-menu-back">
            <div class="part">
                <img src="img/car.jpg"/>
            </div>
            <div class="part">
                <img src="img/car.jpg" style="float: right; transform: scale(-1, 1);"/>
            </div>
        </div>
        <v-row justify="center" style="height: 100%; margin-top: 100px">
            <v-col v-for="(car, index) in cars" :key="index" style="margin-left: 25px; margin-right: 25px" align="center" >
                <car-card :car="car"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CarCard from "@/components/CarCard";
export default {
    name: "Cars",
    components: {CarCard},
    data : () => ({
       cars : [
           {
               name: 'Lamborghini Aventador Roadster',
               description: 'The elegance and vanity of a Roadster meet the power of a naturally aspirated 6.5 liter V-12 engine putting out 515 kW (700 CV), with incredible torque available at all engine speeds. It is an open-top supercar that combines sportiness and style.',
               pictures:['aventador_1', 'aventador_2', 'aventador_3'],
               technical_specifications : {
                   displacement : '6.498 cm³ (396.5 cu in)',
                   power: '740 CV (544 kW) @ 8.400 rpm',
                   speed: '350 km/h (217 mph)',
                   acceleration: '3,0 s'
               },
               rent:'Available for rent'
           },
           {
               name: 'Ferrari 458 Italia',
               description: 'The car\'s exterior styling and features were designed for aerodynamic efficiency, producing downforce of 140 kg (309 lb) at 200 km/h (120 mph). In particular, the front grille features deformable winglets that lower at high speeds, in order to offer reduced drag. The car\'s interior was designed using input from former Ferrari Formula 1 driver Michael Schumacher; in a layout common to racing cars, the new steering wheel incorporates many controls normally located on the dashboard or on stalks, such as turning signals or high beams.',
               pictures:['ferrari1', 'ferrari2', 'ferrari3'],
               technical_specifications : {
                   displacement : '4.498 cm³ (396.5 cu in)',
                   power: '562 hp @ 9,000 rpm',
                   speed: '202 mph',
                   acceleration: '3,4 s'
               },
               rent:'Available for rent'
           },
           {
               name: 'De Tomaso P72',
               description: 'Designed by Jowyn Wong of Wyn Design, the exterior design is based on the P70 racing car and the LeMans race cars of the 1970s and combines modern elements with the classic shape. The exterior also features a top mounted exhaust system.',
               pictures:['tomaso_1', 'tomaso_2', 'tomaso_3', 'tomaso_4'],
               technical_specifications : {
                   displacement : '5.0 L',
                   power: '700+ hp @ 9,000 rpm',
                   speed: '221 mph',
                   acceleration: '2,0 s'
               },
               rent:'Available for rent'
           },
           {
               name: 'Porsche 991 Stinger GTR gen.2',
               description: 'The car was built on a special request of the client from England on our production base in Marbella, Spain. The base car - Porsche 991 Turbo S 2016 with right-hand drive. Full carbon fiber body kit: front and rear bumpers, front fenders with RS air ducts, carbon fiber hood, side skirts, door pads, super-wide spliced rear fenders, rear spoiler and much more. Car on ADV.1 wheels.',
               pictures:['porsche_1', 'porsche_2', 'porsche_3', 'porsche_4', 'porsche_5'],
               technical_specifications : {
                   displacement : '3.8 L',
                   power: '750 hp @ 9,000 rpm',
                   speed: '217 mph',
                   acceleration: '2,6 s'
               },
               rent:'Available for rent'
           },
           {
               name: 'McLaren Automotive McLaren 765LT',
               description: 'Uncompromising. Singular. Focused. shaped by the pursuit of driving purity. The 765LT. Taking the perfectly formed 720S closer to the edge. With a powerful presence and aggressive design language that deliver incredible performance. Less weight. More downforce. Aerodynamic innovation. Bespoke carbon fibre body panels shape an iconic elongated profile. Suspension is lowered. And the front track is wider. The message is clear: nothing gets in the way of dynamic ability. Everything is here for a reason. Inside the 765LT, the unblinking sense of purpose and minimal clarity continue. There’s lightweight Alcantara®. And the seats used in the awe-inspiring McLaren P1™. Sculpted carbon fibre is everywhere. The Longtail story continues',
               pictures:['mclaren_1', 'mclaren_2', 'mclaren_3', 'mclaren_4'],
               technical_specifications : {
                   displacement : '4.0 L',
                   power: '755 hp',
                   speed: '205 mph',
                   acceleration: '2,7 s'
               },
               rent:'Available for rent'
           },
           {
               name: 'BMW E30 3 Series M3',
               description: 'The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW\'s in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986.',
               pictures:['bmw_1', 'bmw_2', 'bmw_3'],
               technical_specifications : {
                   displacement : '2302 cm3 or 140.5 cu-in',
                   power: '197 bhp or 147 kW @ 6750 rpm',
                   speed: '146 mph',
                   acceleration: '6,5 s'
               },
               rent:'Available for rent'
           },
       ]
    }),
}
</script>

<style scoped>
    .top-menu-back{
        height: 100px;
        width: 100%;
        display: flex;
        position: fixed;
        top: 0;
        left:0;
    }
    .part{
        flex: 1;
        background: black;
    }
    .part img{
        height: 100px;
        padding-left: 50px;
    }
</style>
