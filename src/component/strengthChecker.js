import React from 'react'

const PasswordStrengthChecker = ({password=""}) => {
    const getPasswordStrength = () => {
        const passwordLength = password.length;
        if(passwordLength < 1){
            return "Hawkeye";
        }
        else if(passwordLength < 4){
            return "Daredevil";
        }
        else if(passwordLength < 8){
            return "Spider-Man";
        }
        else if(passwordLength < 12){
            return "Aquaman";
        }
        else if(passwordLength < 16){
            return "Thor";
        }
        else{
            return "Superman";
        }
    };
    const passwordStrength = getPasswordStrength();
    if(!passwordStrength) return <React.Fragment />;
  return (
    <div className="passwordStrength">
        Strength:<span>{passwordStrength}</span>
    </div>
  )
}

export default PasswordStrengthChecker;