using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Model;
using ReactApp1.Server.Services.Interface;
using System.Collections.Generic;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DemoController : ControllerBase
    {
        private IDemo _IDemo;
        public DemoController(IDemo idemo)
        {
            _IDemo = idemo;
           
        }
        [HttpGet("GetData")]
        public List<DemoModel> GetData()
        {
            var response = _IDemo.ListData();
            return response;

        }
        [HttpPost("Save")]
        public bool SaveControls(DemoModel model)
        {
            var response = _IDemo.SaveData(model);
            return response;

        }
        [HttpGet("DeleteItems")]
        public bool DeleteItems(int id)
        {
            var responce = _IDemo.DeleteData(id);         
           
            return responce;

        }
    }
}
