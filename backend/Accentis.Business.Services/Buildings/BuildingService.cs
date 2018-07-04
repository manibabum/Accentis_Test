using Accentis.Business.Contracts.Services.Buildings;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Services.Buildings
{
    public class BuildingService : IBuildingService
    {
        public List<Building> GetBuildings()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.BuildingRepository.GetBuildings();
            }
        }

        public List<Building> Get()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.BuildingRepository.Get();
            }
        }
        //public void CreateBuilding(Building building)
        //{
        //    using (var unitOfWork = new UnitOfWork())
        //    {
        //        unitOfWork.BuildingRepository.Insert(building);
        //        unitOfWork.BuildingRepository.Save();
        //    }
        //}

        //public void UpdateBuilding(Building building)
        //{
        //    using (var unitOfWork = new UnitOfWork())
        //    {
        //        unitOfWork.BuildingRepository.Update(building);
        //        unitOfWork.BuildingRepository.Save();
        //    }
        //}

        //public Building GetBuilding(int id)
        //{
        //    using (var unitOfWork = new UnitOfWork())
        //    {
        //        return unitOfWork.BuildingRepository.Get(id);
        //    }
        //}
    }
}
