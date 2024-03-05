using ReactApp1.Server.Model;

namespace ReactApp1.Server.Services.Interface
{
    public interface IUserService
    {
        bool Authenticate(string username, string password);
        void SetPassword(string username, string newPassword);
        User GetUsers(string username, string password);
    }
}
