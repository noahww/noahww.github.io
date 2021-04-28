<template>
  <div>
    <h2>Contact Me</h2>
    <form class="contact-form" @submit.prevent="sendEmail">
      <fieldset>
        <p>
          <label>Name</label>
          <input type="text" name="user_name" v-model="user_name" />
        </p>
        <p>
          <label>Email</label>
          <input type="email" name="user_email" v-model="user_email" />
        </p>
        <p>
          <label>Message</label>
          <textarea name="message" v-model="message"></textarea>
        </p>
        <input type="submit" value="Send" />
      </fieldset>
    </form>
    <br />
    <transition name="slide-fade">
      <p v-text="this.error" v-if="this.error != ''" id="error"></p>
    </transition>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data() {
    return {
      user_name: "",
      user_email: "",
      message: "",
      error: "",
    };
  },
  methods: {
    sendEmail: function (e) {
      if (
        this.user_name === "" ||
        this.user_email === "" ||
        this.message === ""
      ) {
        this.error = "All fields must be filled.";
        return;
      }
      emailjs
        .sendForm(
          "service_kb3fei1",
          "contact_form",
          e.target,
          "user_PsqKI5OOjDEA1jgJU3BmF"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
div {
  padding: 60px;
}
label {
  display: block;
}
input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  width: 100%;
}

textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  width: 100%;
}

#error {
  text-align: center;
}
</style>