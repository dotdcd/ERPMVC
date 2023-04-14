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
    public class ContabilidadController : Controller
    {
        private IContabilidad _Contabilidad;
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


        public ContabilidadController()
        {
            _Contabilidad = new Contabilidad();
            _genericList = new GenericList();
        }

        

        //? Multiempresas Controllers
        public ActionResult Multiempresas()
        {
            return View();
        }

        public ActionResult GetEmpresas()
        {
            var list = new List<EmpresasModel>();
            list = _Contabilidad.GetEmpresas().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Multiempresa(string Id)
        {
            EmpresasModel empresa = new EmpresasModel();
            if (Id != "0")
            {
                empresa = _Contabilidad.GetEmpresaById(Id);
            }
            else
            {
                empresa.empresa_id = "0";
            }
            return View(empresa);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Multiempresa(EmpresasModel empresa)
        {
            string result = _Contabilidad.AddEmpresa(empresa);
            if (result != "0")
            {
                return RedirectToAction("Multiempresas", "Contabilidad");
            }
            return View(empresa);
        }

        //? Bancos Controllers

        public ActionResult Banco()
        {
            return View();
        }

        public ActionResult Bancos()
        {
            return View();
        }


        //? Inversiones Controllers


        public ActionResult Inversiones()
        {
            return View();
        }

        public ActionResult GetInversiones()
        {
            var list = new List<InversionesModel>();
            list = _Contabilidad.GetInversiones().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Inversion(string Id)
        {
            InversionesModel inversion = new InversionesModel();
            if (Id != "0")
            {
                inversion = _Contabilidad.GetInversionById(Id);
            }
            else
            {
                inversion.inversion_id = "0";
            }
            return View(inversion);
        }


        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Inversion(InversionesModel inversion)
        {
            string result = _Contabilidad.AddInversion(inversion);
            if (result != "0")
            {
                return RedirectToAction("Inversiones", "Contabilidad");
            }
            return View(inversion);
        }

        //? Empleados

        public ActionResult GetEmpleados()
        {
            var list = new List<EmpleadosModel>();
            list = _Contabilidad.GetEmpleados().ToList();
            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Empleado(string Id)
        {
            EmpleadosModel empleado = new EmpleadosModel();
            if (Id != "0")
            {
                empleado = _Contabilidad.GetEmpleadosById(Id);
            }
            else
            {
                empleado.empleado_id = "0";
            }   
            return View(empleado);
        }

        public ActionResult Empleados()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Empleado(EmpleadosModel empleado)
        {
            string result = _Contabilidad.AddEmpleado(empleado);
            if (result != "0")
            {
                return RedirectToAction("Empleados", "Contabilidad");
            }
            return View(empleado);
        }

        //? Jornadas
        public ActionResult Jornadas()
        {
            return View();
        }

        //! Dropdowns
        public ActionResult GetTiposEmpleados()
        {
            var list = _genericList.GetListOfItems(ListName.TipoEmpleado);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetCentroDeCostos()
        {
            var list = _genericList.GetListOfItems(ListName.CentroDeCostos);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetSucursales()
        {
            var list = _genericList.GetListOfItems(ListName.Sucursales);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPuestos()
        {
            var list = _genericList.GetListOfItems(ListName.Puestos);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPeriodos()
        {
            var list = _genericList.GetListOfItems(ListName.Periodos);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetEmpresasList()
        {
            var list = _genericList.GetListOfItems(ListName.Empresas);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetSexo()
        {
            var list = _genericList.GetListOfItems(ListName.Sexo);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetEstadoCivil()
        {
            var list = _genericList.GetListOfItems(ListName.EstadoCivil);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPerfilApp()
        {
            var list = _genericList.GetListOfItems(ListName.PerfilApp);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetTiposIndirecto()
        {
            var list = _genericList.GetListOfItems(ListName.TiposIndirecto);
            return Json(new { items = list }, JsonRequestBehavior.AllowGet);
        }
        
    }
}