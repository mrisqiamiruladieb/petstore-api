module.exports = {

    "CREATE_USER_DATA":
    {
        "id": 1,
        "username": "ming_990",
        "firstName": "ming",
        "lastName": "gallardo",
        "email": "ming_epic@mailsac.com",
        "password": "lambo_990.",
        "phone": "089912124365",
        "userStatus": 1
    },

    "LOGIN_USER_DATA":
    {
        "username": "ming_990",
        "password": "lambo_990."
    },

    // error
    "USERNAME_USER_DATA": 
    function(){
        return "ming_990"
    },

    "UPDATE_USER_DATA":
    {
        "id": 1,
        "username": "ming_990",
        "firstName": "ming indo",
        "lastName": "gallardo yes",
        "email": "ming_epic@mailsac.com",
        "password": "lambo_987.",
        "phone": "089912184365",
        "userStatus": 1
    },

    "CREATE_WITH_ARRAY":
    [
        {
          "id": 2,
          "username": "sony_nfs",
          "firstName": "sony",
          "lastName": "avanza",
          "email": "sony_avanza@mailsac.com",
          "password": "sony123",
          "phone": "081299990099",
          "userStatus": 0
        },
        {
            "id": 3,
            "username": "taz_nfs",
            "firstName": "tazz",
            "lastName": "sedan",
            "email": "tazzz@mailsac.com",
            "password": "tazz456",
            "phone": "089090990000",
            "userStatus": 1
          }
      ]

}