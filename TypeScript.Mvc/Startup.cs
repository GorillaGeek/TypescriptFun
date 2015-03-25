using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TypeScript.Mvc.Startup))]
namespace TypeScript.Mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
