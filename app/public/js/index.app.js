var app = new Vue({
    el: '#notSoFunky', //Double check element
  data: {
    name: '',
    lastName: '',
    email: '',
    country: '',
    birthday: '',
    age: '',
    userImgLg: '',
    userImgTmb: ''
  },
  created() {
    this.PullData();
  },
  methods: {
    handleRefresh: function( evt ) {
        this.PullData();
        console.log("click");
    },
    PullData: function() {
        fetch("https://randomuser.me/api")
        .then( response => response.json() )
        .then( json => {
          //this.ptList = json;
          let data = json.results[0];
        
          console.log(data);

          this.name = data.name.first + " " + data.name.last;
          this.country = data.location.country;
          this.email = data.email;
          this.birthday = new Date(data.dob.date);
          this.age = data.dob.age;
          this.userImgLg = data.picture.large;
          this.userImgTmb = data.picture.thumbnail;
          
          console.log(this.userImgTmb);
        }
    
        );
      }
    }
  
  
})