<template>
    <div class="form">
        <header class="entry-subheader">
            <v-icon class="icon-style">mail</v-icon>
            <h1 class="entry-subtitle">Sent message</h1>
        </header>
        <v-form @submit.prevent="sendIt" ref="emailForm">
            <v-text-field dark
                          v-model="form.fName"
                          :counter="10"
                          :rules="nameRules"
                          label="First name"
                          required
            ></v-text-field>
            <v-text-field dark
                          v-model="form.lName"
                          :counter="10"
                          :rules="nameRules"
                          label="Last name"
                          required
            ></v-text-field>
            <v-text-field dark
                          v-model="form.email"
                          :rules="emailRules"
                          label="E-mail"
                          required
            ></v-text-field>
            <v-textarea dark
                        :rules="messageRules"
                        v-model="form.message"
                        label="Message"
                        required
            ></v-textarea>
        </v-form>
        <div class="my-button" @click="sendIt">
            send
        </div>
        <v-dialog v-model="dialog" width="50vh">
            <v-card>
                <v-card-text>
                    <div class="text-center" style="padding-top: 25px">
                        <p>
                            Your Message was sent
                        </p>
                    </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div style="height:20px;"><p> </p></div>
        <form v-show='false' id="email-form" @submit.prevent="sendEmail">
            <input type="text" name="user_fName"  :value="form.fName">
            <input type="text" name="user_lName"  :value="form.lName">
            <input type="email" name="user_email" :value="form.email">
            <textarea name="user_message" :value="form.message"></textarea>
            <input id="sending" type="submit" value="Send">
        </form>
    </div>
</template>

<script>

export default {
    name: "EmailForm",
    components: {

    },
    data: () => ({
        form: {
            fName: '',
            lName: '',
            email: '',
            message: ''
        },
        dialog : false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        messageRules: [
            v => !!v || 'message is required'
        ],
        buttons: null,
        mouseCursor: null
    }),

    methods: {
        initCursor(){
            this.mouseCursor = document.querySelector(".cursor");
            this.buttons = document.querySelectorAll(".my-button");
            this.buttons.forEach(button => {
                button.classList.add('top-index');
                button.addEventListener("mouseover", () => {
                    this.mouseCursor.classList.add("link-grow");
                });
                button.addEventListener("mouseleave", () => {
                    this.mouseCursor.classList.remove("link-grow");
                });
            })
        },
        sendIt(){
            const el = document.getElementById('sending');
            el.click();
        },
        sendEmail() {
            if(this.$refs.emailForm.validate()){
                console.log('SUCCESS!');
                this.clearForm();
                this.resetValidation();
                this.dialog = true;
            }
        },
        clearForm(){
            this.$refs.emailForm.reset()
            this.form = {
                fName: '',
                lName: '',
                email: '',
                message: ''
            }
        },
        resetValidation () {
            this.$refs.emailForm.resetValidation()
        },
    },
    mounted() {
        this.initCursor();
    }
}
</script>

<style scoped>
input{

}
.form{
    margin-left: 20px;
    margin-right: 50px;
}
.entry-subheader{
    margin-top: 40px;
    display: flex;
}
.entry-subtitle{
    font-weight: 900;
    color: #ffffff;
    text-transform: lowercase;
    margin-bottom: 0;
    margin-left: 15px;
}
.icon-style, .my-button {
    font-size: 2.2rem;
    color: rgb(255, 61, 43);
}
.my-button{
    width: 80px;
    z-index: 6;
}
.my-button:hover{
    color: white;
}
@media only screen and (max-width: 699px), (max-width: 900px) and (max-height: 420px){
    .my-button:hover{
        cursor: pointer;
    }
}
@media only screen and (min-width: 700px) and (min-height: 500px){
    .my-button:hover{
        cursor: none;
    }
}
@media only screen and (min-width: 900px) and (min-height: 500px){
    .my-button:hover{
        cursor: none;
    }
}
</style>
<style>
.mail-form{
    z-index: 6;
}
</style>
