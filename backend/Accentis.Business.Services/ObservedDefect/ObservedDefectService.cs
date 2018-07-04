using System.Collections.Generic;
using Accentis.Business.Contracts.Services.ObservedDefect;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.ObservedDefect
{
    public class ObservedDefactService : IObservedDefectService
    {
        public void CreateObservedDefact(ObservedDefects observedDefects)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.ObservedDefectRepository.Insert(observedDefects);
                unitOfWork.ObservedDefectRepository.Save();
            }
        }

        public List<ObservedDefects> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ObservedDefectRepository.Get();
            }
        }

        public List<ObservedDefects> GetAllObservedDefects()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ObservedDefectRepository.GetAllObservedDefects();
            }
        }

        public ObservedDefects GetObservedDefects(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.ObservedDefectRepository.Get(id);
            }
        }

        public void UpdateObservedDefact(ObservedDefects observedDefects)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                unitOfWork.ObservedDefectRepository.Update(observedDefects);
                unitOfWork.ObservedDefectRepository.Save();
            }
        }
    }
}
