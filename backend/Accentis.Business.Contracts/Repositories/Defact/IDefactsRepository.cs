using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.Defact
{
   public interface IDefactsRepository: IBaseRepository<Defacts>
    {
        List<Defacts> GetAllDefacts();
    }
}
