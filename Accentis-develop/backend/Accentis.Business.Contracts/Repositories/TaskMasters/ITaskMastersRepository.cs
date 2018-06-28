using Accentis.Business.Contracts.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Repositories.TaskMasters
{
    public interface ITaskMastersRepository:IBaseRepository<TaskMaster>
    {
        List<TaskMaster> GetTaskMasters();
    }
}
