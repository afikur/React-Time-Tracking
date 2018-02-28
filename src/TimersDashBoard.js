import React from 'react';

import EditableTimersList from './EditableTimersList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashBoard extends React.Component {
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimersList />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
}

export default TimersDashBoard;
