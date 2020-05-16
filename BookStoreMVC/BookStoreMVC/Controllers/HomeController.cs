using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BookStoreMVC.Data;
using BookStoreMVC.Models;
namespace BookStoreMVC.Controllers
{
    public class HomeController : Controller
    {
        private BookContext db = new BookContext();
        public ActionResult Index()
        {
            return View();
        }
    }
}