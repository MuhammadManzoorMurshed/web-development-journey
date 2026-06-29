import React, { use, useState } from 'react';
import CustomerTicketCard from '../customer-ticket-card/CustomerTicketCard';
import PendingTask from '../pending-task/PendingTask';
import ResolvedTask from '../resolved-task/ResolvedTask';
import { toast } from 'react-toastify';

const CustomerTickets = ({ tasksPromise, handlePendingTasksNumber, handleResolvedTasksNumber }) => {
    let initialTasks = use(tasksPromise);

    const [tasks, setTasks] = useState(initialTasks);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const handlePendingTasks = (task) => {
        setPendingTasks(prevPendingTasks => [...prevPendingTasks, task]);

        toast.info(`"${task.title}" is added to the Pending Tasks list.`, {
            theme: "dark",
            position: "top-center"
        });
    }

    handlePendingTasksNumber(pendingTasks.length);
    handleResolvedTasksNumber(resolvedTasks.length);

    const handleResolvedTasks = (task) => {
        setResolvedTasks(prevResolvedTasks => [...prevResolvedTasks, task]);

        toast.info(`"${task.title}" is completed.`, {
            position: "bottom-right",
            theme: "colored"
        });

        setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
        setPendingTasks(prevPendingTasks => prevPendingTasks.filter(pt => pt.id !== task.id));
    }

    const handleRemoveResolvedTask = (resolvedTask) => {
        setResolvedTasks(prevResolvedTasks => prevResolvedTasks.filter(prt => prt.id !== resolvedTask.id));

        toast.info(`"${resolvedTask.title}" is removed.`, {
            position: "top-right",
            theme: "light"
        });
    }

    return (
        <div className='max-w-360 mx-auto flex flex-col sm:flex-row gap-8 px-4 sm:px-0'>
            <div>
                <h2 className='font-semibold text-[24px] leading-6.5 text-[#34485A] mb-4'>Customer Tickets</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4'>
                    {
                        tasks.map(task => {
                            return (
                                <CustomerTicketCard key={task.id} task={task} handlePendingTasks={handlePendingTasks} pendingTasks={pendingTasks}></CustomerTicketCard>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className='space-y-10 min-w-90'>
                    <div>
                        <h2 className='font-semibold text-[24px] leading-6.5 text-[#34485A] mb-4'>Task Status</h2>
                        <div className='space-y-4'>
                            {
                                pendingTasks.map(pendingTask => {
                                    return (
                                        <PendingTask key={pendingTask.id} pendingTask={pendingTask} handleResolvedTasks={handleResolvedTasks}></PendingTask>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[24px] leading-6.5 text-[#34485A] mb-4'>Resolved Task</h2>
                        <div className='space-y-4'>
                            {
                                resolvedTasks.map(resolvedTask => {
                                    return (
                                        <ResolvedTask key={resolvedTask.id} resolvedTask={resolvedTask} handleRemoveResolvedTask={handleRemoveResolvedTask}></ResolvedTask>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;