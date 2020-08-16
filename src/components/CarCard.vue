<template>
    <div class="card">
        <img :src="'img/cars/' + car.pictures[0] + '.jpg'" :alt="car.name">
        <v-divider style="margin:0 15px 0 15px" dark/>
        <div class="card-description">
            <h2>{{car.name}}</h2>
            <div class="spec-row"><h3>Displacement:</h3><span>{{car.technical_specifications.displacement}}</span></div>
            <div class="spec-row"><h3>Max power:</h3><span>{{car.technical_specifications.power}}</span></div>
            <div class="spec-row"><h3>Max speed:</h3><span>{{car.technical_specifications.speed}}</span></div>
            <div class="spec-row"><h3>Acceleration:</h3><span>{{car.technical_specifications.acceleration}}</span></div>
            <div class="spec-row"><h3>Rent:</h3><span style="color: #00c853">{{car.rent}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarCard",
    props: ['car']
}
</script>

<style scoped>
    .card{
        background: black;
        -webkit-box-shadow: 0px 0px 11px -1px rgba(135,136,140,1);
        -moz-box-shadow: 0px 0px 11px -1px rgba(135,136,140,1);
        box-shadow: 0px 0px 11px -1px rgba(135,136,140,1);
        min-width: 300px;
        max-width: 300px;
    }
    .card:hover{
        -webkit-box-shadow: 0px 0px 11px -1px rgb(255, 61, 43);
        -moz-box-shadow: 0px 0px 11px -1px rgb(255, 61, 43);
        box-shadow: 0px 0px 11px -1px rgb(255, 61, 43);
    }
    img {
        width: 100%;
        height: 200px;
    }
    .card-description{
        padding: 15px;
        color: white;
        font-family: 'Source Code Pro', monospace;
        font-size: 0.6rem;
    }
    h2{
        color: white;
    }
    h3, span{
        flex: 1;
    }
    span{
        color: rgb(255, 61, 43);
    }
    .spec-row{
        color: #87888c;
        display: inline-flex;
        width: 100%;
        margin-top: 5px;
    }
    @media only screen and (min-width: 900px) and (min-height: 500px) {
        .card{
            width: 300px;
        }
    }
</style>
