using Accentis.Business.Contracts.Repositories.Buildings;
using Accentis.Business.Contracts.Repositories.BuildingTypes;
using Accentis.Business.Contracts.Repositories.ConstructionPart;
using Accentis.Business.Contracts.Repositories.Defact;
using Accentis.Business.Contracts.Repositories.Designations;
using Accentis.Business.Contracts.Repositories.Designations.Users;
using Accentis.Business.Contracts.Repositories.Inspection;
using Accentis.Business.Contracts.Repositories.ObservedDefect;
using Accentis.Business.Contracts.Repositories.Roles;
using Accentis.Business.Contracts.Repositories.RoofComponent;
using Accentis.Business.Contracts.Repositories.RoofConstructions;
using Accentis.Business.Contracts.Repositories.RoofDetailElementCondition;
using Accentis.Business.Contracts.Repositories.RoofElements;
using Accentis.Business.Contracts.Repositories.Roofs;
using Accentis.Business.Contracts.Repositories.RoofTypes;
using Accentis.Business.Dal.Repositories;
using Accentis.Business.Dal.Repositories.Buildings;
using Accentis.Business.Dal.Repositories.BuildingTypes;
using Accentis.Business.Dal.Repositories.ConstructionPart;
using Accentis.Business.Dal.Repositories.Defact;
using Accentis.Business.Dal.Repositories.Designations;
using Accentis.Business.Dal.Repositories.Inspection;
using Accentis.Business.Dal.Repositories.Roles;
using Accentis.Business.Dal.Repositories.RoofComponent;
using Accentis.Business.Dal.Repositories.RoofConstructions;
using Accentis.Business.Dal.Repositories.RoofElements;
using Accentis.Business.Dal.Repositories.Roofs;
using Accentis.Business.Dal.Repositories.RoofTypes;
using Accentis.Business.Dal.Repositories.Users;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using Microsoft.AspNetCore.Identity;
using System;
using Accentis.Business.Contracts.Repositories.ElementConstruction;
using Accentis.Business.Dal.Repositories.ElementConstruction;
using Accentis.Business.Contracts.Repositories.RoofAdvicesMaintenance;
using Accentis.Business.Dal.Repositories.RoofAdvicesMaintenance;
using Accentis.Business.Contracts.Repositories.BuildingAdviceMaintenances;
using Accentis.Business.Dal.Repositories.BuildingAdviceMaintenances;
using Accentis.Business.Contracts.Repositories.BuildingPicture;
using Accentis.Business.Dal.Repositories.BuildingPicture;
using Accentis.Business.Contracts.Repositories.ContractDuties;
using Accentis.Business.Dal.Repositories.ContractDuties;
using Accentis.Business.Contracts.Repositories.BuildingDocuments;
using Accentis.Business.Dal.Repositories.BuildingDocuments;
using Accentis.Business.Contracts.Repositories.TaskMasters;
using Accentis.Business.Dal.Repositories.TaskMasters;

namespace Accentis.Business.Dal
{
    public class UnitOfWork : IDisposable
    {
        private readonly Accentis_NewContext context = new Accentis_NewContext(new Microsoft.EntityFrameworkCore.DbContextOptions<Accentis_NewContext>());

        private readonly UserManager<ApplicationUser> _userManager;

        private bool disposed;

        public IDesignationRepository DesignationRepository { get; }

        public IUserRepository UserRepository { get; }

        public IRoleRepository RoleRepository { get; }

        public IBuildingTypeRepository BuildingTypeRepository { get; }

        public IRoofTypeRepository RoofTypeRepository { get; }

        public IDefactsRepository DefactsRepository { get; }

        public IConstructionPartRepository ConstructionPartsRepository { get; }

        public IBuildingRepository BuildingRepository { get; }

        public IRoofComponentsRepository RoofComponentsRepository { get; }

        public IInspectionRepository InspectionRepository { get; }

        public IRoofRepository RoofRepository { get; }

        public IRoofElementRepository RoofElementRepository { get; }

        public IRoofDetailElementConditionRepository RoofDetailElementConditionRepository { get; }

        public IObservedDefectRepository ObservedDefectRepository { get; }

        public IRoofConstructionRepository RoofConstructionRepository { get; }

        public IElementConstructionRepository ElementConstructionRepository { get; }

        public IRoofAdvicesMaintenanceRepository RoofAdvicesMaintenanceRepository { get; }

        public IBuildingAdviceMaintenanceRepository BuildingAdviceMaintenanceRepository { get; }

        public IBuildingPictureRepository BuildingPicturesRepository { get; }

        public IContractDutiesRepository ContractDutiesRepository { get; }

        public IBuildingDocumentsRepository BuildingDocumentsRepository { get; }

        public ITaskMastersRepository TaskMastersRepository { get; }

        public UnitOfWork()
        {
            DesignationRepository = new DesignationRepository(context);
            UserRepository = new UserRepository(context);
            RoleRepository = new RoleRepository(context);
            BuildingTypeRepository = new BuildingTypeRepository(context);
            RoofTypeRepository = new RoofTypeRepository(context);
            DefactsRepository = new DefactsRepository(context);
            ConstructionPartsRepository = new ConstructionPartsRepository(context);
            BuildingRepository = new BuildingRepository(context);
            RoofComponentsRepository = new RoofComponentRepository(context);
            InspectionRepository = new InspectionRepository(context);
            RoofRepository = new RoofRepository(context);
            RoofElementRepository = new RoofElementRepository(context);
            RoofDetailElementConditionRepository = new RoofDetailElementConditionRepository(context);
            ObservedDefectRepository = new ObservedDefectRepository(context);
            RoofConstructionRepository = new RoofConstructionRepository(context);
            ElementConstructionRepository = new ElementConstructionRepository(context);
            RoofAdvicesMaintenanceRepository = new RoofAdvicesMaintenanceRepository(context);
            BuildingAdviceMaintenanceRepository = new BuildingAdviceMaintenanceRepository(context);
            BuildingPicturesRepository=new BuildingPictureRepository(context);
            ContractDutiesRepository = new ContractDutiesRepository(context);
            BuildingDocumentsRepository = new BuildingDocumentsRepository(context);
            TaskMastersRepository = new TaskMastersRepository(context);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed && disposing)
            {
                context.Dispose();
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
