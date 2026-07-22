<template>
  <div class="tasks-tab">
    <div class="header-actions">
      <h3>Tasks</h3>
      <div class="filters">
        <input type="text" placeholder="Search tasks..." class="search-input" />
        <button class="btn-secondary">Filter</button>
        <button class="btn-primary">+ Add Task</button>
      </div>
    </div>

    <div class="kanban-board">
      <div class="kanban-column" v-for="column in columns" :key="column.title">
        <div class="column-header">
          <h4>{{ column.title }}</h4>
          <span class="task-count">{{ column.tasks.length }}</span>
        </div>
        <div class="task-list">
          <div class="task-card" v-for="task in column.tasks" :key="task.id">
            <div class="task-header">
              <span class="task-id">{{ task.id }}</span>
              <span :class="['priority-dot', task.priority.toLowerCase()]"></span>
            </div>
            <h5 class="task-title">{{ task.title }}</h5>
            <div class="task-footer">
              <span class="assignee">{{ task.assignee }}</span>
              <span class="due-date">{{ task.dueDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'To Do',
    tasks: [
      { id: 'TSK-101', title: 'Prepare hull cleaning equipment', assignee: 'John D.', dueDate: 'Oct 12', priority: 'High' },
      { id: 'TSK-102', title: 'Review main engine manuals', assignee: 'Sarah M.', dueDate: 'Oct 14', priority: 'Medium' }
    ]
  },
  {
    title: 'In Progress',
    tasks: [
      { id: 'TSK-099', title: 'Initial inspection survey', assignee: 'Mike R.', dueDate: 'Oct 10', priority: 'Critical' }
    ]
  },
  {
    title: 'Done',
    tasks: [
      { id: 'TSK-085', title: 'Dry dock booking confirmation', assignee: 'Admin', dueDate: 'Sep 25', priority: 'High' },
      { id: 'TSK-086', title: 'Preliminary budget approval', assignee: 'Finance', dueDate: 'Sep 30', priority: 'Critical' }
    ]
  }
];
</script>

<style scoped>
.tasks-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.header-actions h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
}

.filters {
  display: flex;
  gap: 1rem;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.9rem;
}

.btn-secondary {
  background-color: var(--white);
  color: var(--text-dark);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background-color: #f8fafc;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.kanban-column {
  background-color: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--border-color);
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.column-header h4 {
  font-weight: 600;
  color: var(--text-dark);
}

.task-count {
  background-color: #e1e4e8;
  color: var(--text-dark);
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-card {
  background-color: var(--white);
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.task-id {
  font-size: 0.75rem;
  color: var(--text-grey);
  font-weight: 500;
}

.priority-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.priority-dot.critical { background-color: #d93025; }
.priority-dot.high { background-color: #f9ab00; }
.priority-dot.medium { background-color: #1a73e8; }

.task-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-grey);
}

.assignee {
  background-color: #f1f3f4;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
</style>
