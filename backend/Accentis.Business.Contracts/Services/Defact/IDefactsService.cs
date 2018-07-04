using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.Defact
{
   public interface IDefactsService
    {
        List<Defacts> GetAllDefects();

        List<Defacts> Get();

        void CreateDefact(Defacts defacts);

        void UpdateDefact(Defacts defacts);

        Defacts GetDefacts(int id);
    }
}
