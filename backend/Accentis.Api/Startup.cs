using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Accentis.Business.Contracts.Repositories.Designations.Users;
using Accentis.Business.Contracts.Repositories.General;
using Accentis.Business.Contracts.Services.Buildings;
using Accentis.Business.Contracts.Services.BuildingTypes;
using Accentis.Business.Contracts.Services.ConstructionPart;
using Accentis.Business.Contracts.Services.Defact;
using Accentis.Business.Contracts.Services.Designations;
using Accentis.Business.Contracts.Services.Inspection;
using Accentis.Business.Contracts.Services.ObservedDefect;
using Accentis.Business.Contracts.Services.Roles;
using Accentis.Business.Contracts.Services.RoofComponent;
using Accentis.Business.Contracts.Services.RoofDetailElementCondition;
using Accentis.Business.Contracts.Services.RoofElements;
using Accentis.Business.Contracts.Services.Roofs;
using Accentis.Business.Contracts.Services.RoofTypes;
using Accentis.Business.Contracts.Services.Users;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Business.Dal.Repositories.Users;
using Accentis.Business.Services.Buildings;
using Accentis.Business.Services.BuildingTypes;
using Accentis.Business.Services.ConstructionPart;
using Accentis.Business.Services.Defact;
using Accentis.Business.Services.Designations;
using Accentis.Business.Services.Inspection;
using Accentis.Business.Services.ObservedDefect;
using Accentis.Business.Services.Roles;
using Accentis.Business.Services.RoofComponent;
using Accentis.Business.Services.RoofDetailElementCondition;
using Accentis.Business.Services.RoofElements;
using Accentis.Business.Services.Roofs;
using Accentis.Business.Services.RoofTypes;
using Accentis.Business.Services.Users;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using AutoMapper;
using EME.Business.JWT;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;
using Accentis.Business.Contracts.Services.ElementConstruction;
using Accentis.Business.Services.ElementConstruction;
using Accentis.Business.Contracts.Services.RoofConstructions;
using Accentis.Business.Services.RoofConstructions;
using Accentis.Business.Contracts.Services.RoofAdvicesMaintenance;
using Accentis.Business.Services.RoofAdvicesMaintenance;
using Accentis.Business.Contracts.Services.BuildingAdviceMaintenances;
using Accentis.Business.Services.BuildingAdviceMaintenances;
using Accentis.Business.Contracts.Services.BuildingPicture;
using Accentis.Business.Services.BuildingPicture;
using Accentis.Business.Contracts.Services.ContractDuties;
using Accentis.Business.Services.ContractDuties;
using Accentis.Business.Contracts.Services.BuildingDocuments;
using Accentis.Business.Services.BuildingDocuments;
using Accentis.Business.Contracts.Services.TaskMasters;
using Accentis.Business.Services.TaskMasters;

namespace Accentis.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            //  Configuration = configuration;
            var builder = new ConfigurationBuilder()
      .SetBasePath(env.ContentRootPath)
      .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
      .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
      .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }
            ).AddJwtBearer(options =>

               options.TokenValidationParameters = new TokenValidationParameters
               {
                   ValidateIssuer = true,
                   ValidateAudience = true,
                   ValidateIssuerSigningKey = true,
                   ValidIssuer = Configuration.GetSection("TokenAuthentication:Issuer").Value,
                   ValidAudience = Configuration.GetSection("TokenAuthentication:Audience").Value,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetSection("TokenAuthentication:SecretKey").Value)),
                   ValidateLifetime = true

               }
               );

            services.AddMvc();
            services.AddAutoMapper();
            services.AddDbContext<Accentis_NewContext>(options => { options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")); }, ServiceLifetime.Transient
            );
            services.AddIdentity<ApplicationUser, IdentityRole>().AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
            //services.AddScoped<Accentis_NewContext, ApplicationDbContext>();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddTransient<IDesignationService, DesignationService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IBuildingTypeService, BuildingTypeService>();
            services.AddScoped<IRoofTypeService, RoofTypeService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped<IDefactsService, DefactsService>();
            services.AddScoped<IBuildingService, BuildingService>();
            services.AddScoped<IConstructionPartsService, ConstructionPartsService>();
            services.AddScoped<IInspectionService, InspectionService>();
            services.AddScoped<IRoofComponentsService, RoofComponentService>();
            services.AddScoped<IRoofService, RoofService>();
            services.AddScoped<IRoofElementService, RoofElementService>();
            services.AddScoped<IRoofDetailElementConditionService, RoofDetailElementConditionService>();
            services.AddScoped<IObservedDefectService, ObservedDefactService>();
            services.AddScoped<IRoofConstructionsService, RoofConstructionService>();
            services.AddScoped<IElementConstructionService, ElementConstructionService>();
            services.AddScoped<IRoofAdvicesMaintenanceService, RoofAdvicesMaintenanceService>();
            services.AddScoped<IBuildingAdviceMaintenanceService, BuildingAdviceMaintenanceService>();
            services.AddScoped<IBuildingPictureService, BuildingPictureService>();
            services.AddScoped<IContractDutiesService, ContractDutiesService>();
            services.AddScoped<IBuildingDocumentsService, BuildingDocumentsService>();
            services.AddScoped<ITaskMastersService, TaskMastersService>();

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings  
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;
                //options.Password.RequiredUniqueChars = 6;

                // Lockout settings  
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                // User settings  
                options.User.RequireUniqueEmail = true;
            });
            services.Configure<TokenProviderOptions>(Configuration.GetSection("TokenAuthentication"));
        //    services
        //.AddMvc()
        //.AddJsonOptions(options =>
        //    options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            services.AddMvc().AddJsonOptions(x => x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            // Add Kendo UI services to the services container
            services.AddKendo();

            services.AddSwaggerGen(c=> {
                c.SwaggerDoc("v1", new Info { Title = "Accentis API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme { In = "header", Description = "Please enter JWT with Bearer into field", Name = "Authorization", Type = "apiKey" });
                c.AddSecurityRequirement(new Dictionary<string, IEnumerable<string>> {
                { "Bearer", Enumerable.Empty<string>() },
            });
            });
            services.AddLogging();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseExceptionHandler();
            app.UseMvc();
            
            app.UseAuthentication();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c=> {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Accentis API V1");
            });

        

            // Configure Kendo UI
            //app.UseKendo(env);


        }
    }
}
