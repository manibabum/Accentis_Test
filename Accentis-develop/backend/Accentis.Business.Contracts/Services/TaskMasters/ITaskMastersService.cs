using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Contracts.Services.TaskMasters
{
    public interface ITaskMastersService
    {
        void CreateTaskMaster(TaskMaster taskMaster);

        void UpdateTaskMaster(TaskMaster taskMaster);

        List<TaskMaster> Get();

        List<TaskMaster> GetTaskMasters();

        TaskMaster GetTaskMaster(int id);
    }
}
