using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mis321pa3.api.models;
using mis321pa3.api.DataAccess;
using mis321pa3.api.database;
using mis321pa3.api.interfaces;

namespace mis321pa3.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        // GET: api/Driver
        [HttpGet]
        public List<Driver> Get()  //Show all drivers
        {
            DriverDataAccess dataAccess = new DriverDataAccess();
            return dataAccess.GetAll();
        }

        // GET: api/Driver/ //get 1 //won't need //how you pass things in on url//actually might need after all
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Driver //create //hire driver
        [HttpPost]
        public void Post([FromBody] string value)
        {
            Driver myDriver = new Driver();
            ICreateDriver hireDriver = new CreateDriver();
            hireDriver.CreateDriver(myDriver);
        }

        // PUT: api/Driver/5 //edit driver rating
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            IUpdateDriverRating editRating = new UpdateDriverRating();
            editRating.UpdateDriverRating(id);
        }

        // DELETE: api/Driver/5 //fire driver
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            IDeleteDriver fireDriver = new DeleteDriver();
            fireDriver.DeleteDriver(id);
        }
    }
}
