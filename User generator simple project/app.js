const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      const { name, email, gender, picture } = results[0];
      console.log(results);
      this.firstName = name.first;
      this.lastName = name.last;
      this.email = email;
      this.gender = gender;
      this.picture = picture.large;
    },
  },
});

app.mount("#app");
