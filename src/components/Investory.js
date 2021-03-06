import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Investory extends Component {
    // static propTypes ={
    //     fishes: PropTypes.array,
    //     loadSamplesFishes: PropTypes.func,
    //     updateFish: PropTypes.func,
    //     deleteFish: PropTypes.func,
    // }

    render() {
        return (
            <div className="inventory">
                <h2>Investory!!!</h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        key={key} 
                        index={key} 
                        fish={this.props.fishes[key]}
                        updateFish = {this.props.updateFish} 
                        deleteFish = {this.props.deleteFish} 
                    />
                )}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamplesFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}

export default Investory;