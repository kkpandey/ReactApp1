using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactApp1.Server.Model;
using ReactApp1.Server.Services.Interface;
using System.Collections.Generic;
using System.Numerics;
using System.Text;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DemoController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;

        private IDemo _IDemo;
        public DemoController(IDemo idemo, IHttpClientFactory clientFactory)
        {
            _IDemo = idemo;
            _clientFactory = clientFactory;

        }
        [HttpGet("GetData")]
        public List<DemoModel> GetData()
        {
            var response = _IDemo.ListData();
            return response;

        }
        
        [HttpGet]
        [Authorize] // Require authentication for this endpoint
        public async Task<RandomUser> GetUser()
        {
            // Fetch random user from the API
            var user = await FetchRandomUser();

            // Return the user as JSON response
            return user;
        }
        private async Task<RandomUser> FetchRandomUser()
        {
            using (var httpClient = _clientFactory.CreateClient())
            {
                var response = await httpClient.GetAsync("https://randomuser.me/api/");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                dynamic result = JsonConvert.DeserializeObject(responseBody);
                var user = new RandomUser
                {
                    FirstName = result.results[0].name.first,
                    LastName = result.results[0].name.last,
                    Email = result.results[0].email,
                    gender = result.results[0].gender,
                    phone = result.results[0].phone,
                    // Populate other properties as needed
                };
                return user;
            }
        }
    }
}
