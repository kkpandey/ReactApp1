using Microsoft.AspNetCore.Connections;
using Microsoft.Extensions.Options;
using ReactApp1.Server.Model;
using ReactApp1.Server.Services.Interface;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace ReactApp1.Server.Services
{
    public class DemoServices: IDemo
    {
        public DemoServices(ApplicationContext context)
        {
          
        }

        public List<DemoModel> ListData()
        {
            List<DemoModel> lst=new List<DemoModel>();
            lst.Add(new DemoModel { Id = 1, Name = "Demo", Mobile = "9958112503", email = "demo@gmail.com", Address = "Noida" });
            lst.Add(new DemoModel { Id = 1, Name = "Demo1", Mobile = "9958112503", email = "demo1@gmail.com", Address = "Noida1" });
            lst.Add(new DemoModel { Id = 1, Name = "Demo2", Mobile = "9958112503", email = "demo2@gmail.com", Address = "Noida2" });
            lst.Add(new DemoModel { Id = 1, Name = "Demo3", Mobile = "9958112503", email = "demo3@gmail.com", Address = "Noida3" });
            lst.Add(new DemoModel { Id = 1, Name = "Demo4", Mobile = "9958112503", email = "demo4@gmail.com", Address = "Noida4" });
            lst.Add(new DemoModel { Id = 1, Name = "Demo5", Mobile = "9958112503", email = "demo5@gmail.com", Address = "Noida5" });

            return lst;

        }
        public bool SaveData(DemoModel model)
        {
            bool result=false;
            try
            {
                _context.DemoModels.Add(model);
                _context.SaveChanges();
                result = true;  
            }
            catch (Exception ex) { }
            return result;

        }
       
    }
}
