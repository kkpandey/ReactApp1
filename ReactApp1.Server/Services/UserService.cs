using ReactApp1.Server.Model;
using ReactApp1.Server.Services.Interface;

namespace ReactApp1.Server.Services
{
    public class UserService : IUserService
    {
        // Dummy user data storage
        private List<User> users = new List<User>();

        public UserService()
        {
            // Populate dummy users
            users.Add(new User { Username = "admin", Password = "admin" });
            users.Add(new User { Username = "user2", Password = "password2" });
        }

        public bool Authenticate(string username, string password)
        {
            var user = users.FirstOrDefault(u => u.Username == username && u.Password == password);
            return user != null;
        }

        public User GetUsers(string username, string password)
        {
            var user = users.Where(x => x.Username == username && x.Password == password).FirstOrDefault();
            return user;
        }
        public void SetPassword(string username, string newPassword)
        {
            var user = users.FirstOrDefault(u => u.Username == username);
            if (user != null)
            {
                user.Password = newPassword;
            }
        }
    }
}
