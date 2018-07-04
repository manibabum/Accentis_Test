using Accentis.Business.Contracts.Services.Defact;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.Defact
{
    public class DefactsService : IDefactsService
    {
        public List<Defacts> GetAllDefects()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DefactsRepository.GetAllDefacts();
            }
        }
        public void CreateDefact(Defacts defacts)
        {
            using (var unitofwork = new UnitOfWork())
            {
                unitofwork.DefactsRepository.Insert(defacts);
                unitofwork.DefactsRepository.Save();
            }
        }

        public Defacts GetDefacts(int id)
        {
            using (var unitofwork = new UnitOfWork())
            {
                return unitofwork.DefactsRepository.Get(id);
            }
        }

        public void UpdateDefact(Defacts defacts)
        {
            using (var unitofwork = new UnitOfWork())
            {
                unitofwork.DefactsRepository.Update(defacts);
                unitofwork.DefactsRepository.Save();
            }
        }

        public List<Defacts> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.DefactsRepository.Get();
            }
        }
    }
}
