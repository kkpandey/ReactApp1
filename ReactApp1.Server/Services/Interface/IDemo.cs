using ReactApp1.Server.Model;

namespace ReactApp1.Server.Services.Interface
{
    public interface IDemo
    {
        List<DemoModel> ListData();
        bool SaveData(DemoModel model);
        bool DeleteData(int id);
    }
}
