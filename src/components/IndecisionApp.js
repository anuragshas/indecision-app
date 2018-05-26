import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = ()=>{
        this.setState(()=>({options:[]}));
    };

    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>
                (optionToRemove !== option))
        }))
    };

    handlePick = ()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=> ({selectedOption:option}));
    };

    handleAddOption = (option)=>{
        if(!option){
            return `Please enter valid option`;
        } else if(this.state.options.indexOf(option)>-1){
            return `This option already exists`;
        }

        this.setState((prevState)=>({
            options: prevState.options.concat(option)}));
    };

    handleClearSelectedOption = ()=>{
        this.setState(()=>({selectedOption: undefined}))
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        } catch(e){}
    }

    componentDidUpdate(prevProps, prevState){
        try{
            if(prevState.options.length !== this.state.options.length){
                const json = JSON.stringify(this.state.options);
                localStorage.setItem("options",json);
            }
        } catch(e) { }
    }

    render(){
        const subTitle = "Put your life in hands of a Computer";
        return(
            <div>
                <Header
                    subTitle= {subTitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options
                            options = {this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}