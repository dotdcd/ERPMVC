using System;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using System.IO;
using System.Web.Configuration;
using App.Model;
using App.Business;
using App.Contracts;
using WebApplication.Extensions;
using System.Collections.Generic;
using System.Linq;

namespace WebApplication.Controllers
{

    public class HomeController : Controller
    {

        private ISample _Sample;        
        private IGenericList _genericList;
        private string idUser;
        private string nameUser;
        
        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);
            idUser = "0";
            nameUser = "";
            if (requestContext.HttpContext.User.Identity.IsAuthenticated)
            {
                idUser = requestContext.HttpContext.User.Identity.GetIdSystemUser().ToString();
                nameUser = requestContext.HttpContext.User.Identity.GetUserNameIdentifier().ToString();
            }
        }

        public HomeController()
        {
            _Sample = new Sample();
            _genericList = new GenericList();            
        }

        public ActionResult DashboardV1()
        {
            return View();
        }

        public ActionResult DashboardV2()
        {
            return View();
        }

        public ActionResult MyList()
        {
            return View();
        }

        public ActionResult GetMyList(string dateIni, string dateEnd)
        {
            var list = new List<SampleModel>();
            list = _Sample.GetTicketsByUser(idUser, dateIni, dateEnd).ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Sample(string Id)
        {            
            SampleModel ticket = new SampleModel();
            if (Id != "0")
            {
                ticket = _Sample.GetTicketById(Id);
                ViewBag.StatusTicket = ticket.IdStatus;
            }
            else
            {
                ViewBag.StatusTicket = "0";
                ticket.IdTicket = "0";
                ticket.IdStatus = "0";
            }
            return View(ticket);            
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Sample(SampleModel model)
        {                        
            if (ModelState.IsValid)
            {
                model.IdUser = idUser;                    
                string result = _Sample.Add(model);
                if (result != "0")
                {                        
                    return RedirectToAction("MyList", "Home");
                }
            }
            return View(model);            
        }


        //Employees
        public ActionResult GetEmployees(int includeAll)
        {
            var list = _genericList.GetListOfItems(ListName.Empleados);
            list.Insert(0, new GenericModel() { text = "Seleccione", id = "0" });
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }
        

        //Proyectos
        public ActionResult GetProjects(string customerId)
        {
            var list = _genericList.GetListOfItemsByParentId(ListName.Proyectos, customerId);
            list.Insert(0, new GenericModel() { text = "Seleccione", id = "0" });
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }        

        //Customers
        public ActionResult GetCustomers()
        {
            var list = _genericList.GetListOfItemsByParentId(ListName.Customers, idUser);
            list.Insert(0, new GenericModel() { text = "Seleccione", id = "0" });
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }


    }
}