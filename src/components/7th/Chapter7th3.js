import React from 'react'
import "../6th/Chapter1.css";
import ans312 from "../../Images/25.jpg";
import ans322 from "../../Images/26.jpg";
import ans331 from "../../Images/27.jpg";
import ans332 from "../../Images/28.jpg";
import ans333 from "../../Images/29.jpg";
import ans334 from "../../Images/30.jpg";
import ans335 from "../../Images/31.jpg";
function Chapter1() {
    return (
        <div className = "chapter1-container">
            <h1>Learn NCERT Maths in Punjabi</h1>
            <hr />
            <h2>ਕਲਾਸ 7ਵੀਂ NCERT ਗਣਿਤ ਲਈ ਹੱਲ</h2>
            <h3>ਅਭਿਆਸ 3. "ਅੰਕੜਿਆਂ ਦਾ ਪ੍ਰਬੰਧਨ" ਦਾ ਹੱਲ</h3>
            <hr />
            <marquee>ਬਾਕੀ ਬਚੇ ਸਵਾਲਾਂ ਦਾ ਹੱਲ ਜਲਦੀ ਹੀ ਉਪਲਬਧ ਕਰਾਇਆ ਜਾਏਗਾ </marquee>

               <div className = "chapter1-container1">

                <div className = "chapter1-left">
                <h4>ਅਭਿਆਸ  3.1  ਪ੍ਰਸ਼ਨ 1.</h4>
                <p>
                ਆਪਣੀ ਕਲਾਸ ਦੇ ਕਿਸੇ ਵੀ ਦਸ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਉਚਾਈ ਦੀ ਸੀਮਾ ਲੱਭੋ.
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                ਆਓ ਅਸੀਂ 10 ਵਿਦਿਆਰਥੀਆਂ ਦੀਆਂ ਉਚਾਈਆਂ ਨੂੰ ਇਸ ਪ੍ਰਕਾਰ ਕਰੀਏ:
                140 ਸੈਂਟੀਮੀਟਰ, 141.5 ਸੈਂਟੀਮੀਟਰ, 138 ਸੈਂਟੀਮੀਟਰ, 150 ਸੈਂਟੀਮੀਟਰ, 161 ਸੈਂਟੀਮੀਟਰ,
                138 ਸੈਂਟੀਮੀਟਰ, 140.5 ਸੈਂਟੀਮੀਟਰ, 135.5 ਸੈਂਟੀਮੀਟਰ, 160 ਸੈਂਟੀਮੀਟਰ, 158 ਸੈਮੀ
                ਇੱਥੇ, ਘੱਟੋ ਘੱਟ ਉਚਾਈ = 135.5 ਸੈ<br/>
                ਅਧਿਕਤਮ ਉਚਾਈ = 161 ਸੈ<br/>
                ਰੇਂਜ = ਅਧਿਕਤਮ ਉਚਾਈ - ਘੱਟੋ ਘੱਟ ਉਚਾਈ<br/>
                = 161 ਸੈਮੀ - 135.5 ਸੈਮੀ = 25.5 ਸੈਮੀ<br/>
                ਇਸ ਲਈ, ਲੋੜੀਂਦੀ ਸੀਮਾ = 25.5 ਸੈ.
                </p>
                
                </div>
                
                <div className = "chapter1-center">
                <h4>ਅਭਿਆਸ  3.1  ਪ੍ਰਸ਼ਨ 2.</h4>
                <p>
                ਇੱਕ ਟੇਬੂਲਰ ਰੂਪ ਵਿੱਚ ਇੱਕ ਕਲਾਸ ਮੁਲਾਂਕਣ ਵਿੱਚ ਹੇਠ ਲਿਖੇ ਅੰਕਾਂ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ.<br/>
                4, 6, 7, 5, 3, 5, 4, 5, 2, 6, 2, 5, 1, 9, 6, 5, 8, 4, 6, 7<br/>
                (i) ਕਿਹੜੀ ਸੰਖਿਆ ਸਭ ਤੋਂ ਵੱਡੀ  ਹੈ?<br/>
                (ii) ਕਿਹੜੀ ਸੰਖਿਆ ਸਭ ਤੋਂ ਛੋਟੀ  ਹੈ?<br/>
                (iii) ਡੇਟਾ ਦੀ ਰੇਂਜ ਕੀ ਹੈ?<br/>
                (iv) ਗਣਿਤ ਦਾ ਔਸਤ  ਲੱਭੋ.<br/>
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                ਆਓ ਇੱਕ ਬਾਰੰਬਾਰਤਾ ਵੰਡ ਸਾਰਣੀ ਬਣਾਈਏ:<br/>
                <img 
                src = {ans312}
                alt = ""
                />
                <br/>
                (i) 9 ਸਭ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਹੈ<br/>
                (ii) 1 ਸਭ ਤੋਂ ਛੋਟੀ ਸੰਖਿਆ ਹੈ.<br/>
                (iii) ਰੇਂਜ = ਅਧਿਕਤਮ ਅੰਕ-ਘੱਟੋ ਘੱਟ ਅੰਕ
                = 9 - 1 = 8<br/>
                (iv) ਹਿਸਾਬ ਦਾ ਮਤਲਬ = Σfixi/Σfi = 100/20 = 5<br/>
                </p>
                </div>

                <div className = "chapter1-right">
                <h4>ਅਭਿਆਸ  3.1  ਪ੍ਰਸ਼ਨ 3.</h4>
                <p>
                ਪਹਿਲੇ ਪੰਜ ਸੰਖਿਆਵਾਂ ਦੀ ਔਸਤ  ਲੱਭੋ.<br/>
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                ਪਹਿਲੇ 5 ਨੰਬਰ 0, 1, 2, 3, 4 ਹਨ<br/>
                ∴ ਔਸਤ = 0+1+2+3+45 = 105 = 2<br/>
                ਇਸ ਲਈ, ਔਸਤ = 2.
                </p>
                </div>
            </div>

            <div className = "chapter1-container1">
                <div className = "chapter1-left">
                <h4>ਅਭਿਆਸ  3.2  ਪ੍ਰਸ਼ਨ 1.</h4>
                <p>
                15 ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਗਣਿਤ ਦੇ ਟੈਸਟ (25 ਵਿੱਚੋਂ) ਦੇ ਅੰਕ ਇਸ ਪ੍ਰਕਾਰ ਹਨ:<br/>
                19, 25, 23, 20, 9, 20, 15, 10, 5, 16, 25, 20, 24, 12, 20<br/>
                ਇਸ ਡੇਟਾ ਦਾ ਬਹੁਲਕ  ਅਤੇ ਮੱਧਮਾਨ ਲੱਭੋ. ਕੀ ਉਹ ਇੱਕੋ ਜਿਹੇ ਹਨ?
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                19, 25, 23, 20, 9, 20, 15, 10, 5, 16, 25, 20, 24, 12, 20<br/>
                ਆਓ ਵਧੇ ਹੋਏ ਕ੍ਰਮ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਡੇਟਾ ਦਾ ਪ੍ਰਬੰਧ ਕਰੀਏ<br/>
                5, 9, 10, 12, 15, 16, 19, 20, 20, 20, 20, 23, 24, 25, 25<br/>
                ਕਿਉਂਕਿ 20 4 ਵਾਰ ਹੁੰਦਾ ਹੈ (ਸਭ ਤੋਂ ਵੱਧ)<br/>
                ∴ ਬਹੁਲਕ = 20<br/>
                n = 15 (ਟਾਂਕ)<br/>
                ∴ ਮੱਧਮਾਨ = (n+1)/2ਵੀਂ ਸੰਖਿਆ = (15+1)/2<br/>
                = 8ਵੀਂ ਸੰਖਿਆ = 20<br/>
                ਇਸ ਤਰ੍ਹਾਂ, ਮੱਧਮਾਨ = 20 ਅਤੇ ਬਹੁਲਕ = 20<br/>
                ਬਹੁਲਕ  ਅਤੇ ਮੱਧਮਾਨ ਇੱਕੋ ਹਨ.
                </p>

                </div>

                <div className = "chapter1-center">
                <h4>ਅਭਿਆਸ  3.2  ਪ੍ਰਸ਼ਨ 2.</h4>
                <p>
                ਕ੍ਰਿਕੇਟ ਮੈਚ ਵਿੱਚ 11 ਖਿਡਾਰੀਆਂ ਦੁਆਰਾ ਬਣਾਏ ਗਏ ਰਨ ਇਸ ਪ੍ਰਕਾਰ ਹਨ:<br/>
                6, 15, 120, 50, 100, 80, 10, 15, 8, 10, 15<br/>
                ਇਸ ਡੇਟਾ ਦਾ ਔਸਤ, ਬਹੁਲਕ ਅਤੇ ਮੱਧਮਾਨ ਲੱਭੋ. ਕੀ ਤਿੰਨ ਇੱਕੋ ਜਿਹੇ ਹਨ?
                </p>
                <p>
                ਹੱਲ :
                </p>
                <p>
                ਦਿੱਤੇ ਗਏ ਡੇਟਾ:<br/>
                6, 15, 120, 50, 100, 80, 10, 15, 8, 10, 15
                <img
                src = {ans322}
                alt = ""
                />
                ਵਧੇ ਹੋਏ ਕ੍ਰਮ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਡੇਟਾ ਦਾ ਪ੍ਰਬੰਧ ਕਰਨਾ, ਸਾਨੂੰ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ<br/>
                6, 8, 10, 10, 15, 15, 15, 50, 80, 100, 120<br/>
                ਇੱਥੇ, 15 3 ਵਾਰ ਹੁੰਦਾ ਹੈ (ਸਭ ਤੋਂ ਵੱਧ)<br/>
                ਬਹੁਲਕ = 15<br/>
                ਕੁੱਲ ਸੰਖਿਆਵਾਂ  = 11 (ਟਾਂਕ)<br/>
                ∴ ਮੱਧਮਾਨ = (11+1)/2ਵੀਂ ਸੰਖਿਆ = 6ਵੀਂ ਸੰਖਿਆ = 15<br/>
                ਇਸ ਤਰ੍ਹਾਂ ਔਸਤ = 39, ਬਹੁਲਕ = 15 ਅਤੇ ਮੱਧਮਾਨ = 15<br/>
                ਔਸਤ, ਬਹੁਲਕ ਅਤੇ ਮੱਧਮਾਨ ਇਕੋ ਜਿਹੇ ਨਹੀਂ ਹਨ.
                </p>
                
                </div>

                <div className = "chapter1-right">
                <h4>ਅਭਿਆਸ  3.2  ਪ੍ਰਸ਼ਨ 3.</h4>
                <p>
                ਇੱਕ ਕਲਾਸ ਦੇ 15 ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਭਾਰ (ਕਿਲੋ ਵਿੱਚ) ਹਨ:<br/>
                38, 42, 35, 37, 45, 50, 32, 43, 43, 40, 36, 38, 43, 38, 47<br/>
                (i) ਇਸ ਡੇਟਾ ਦਾ ਬਹੁਲਕ ਅਤੇ ਮੱਧਮਾਨ ਲੱਭੋ.<br/>
                (ii) ਕੀ ਇੱਕ ਤੋਂ ਵੱਧ ਬਹੁਲਕ ਹਨ?
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                 ਦਿੱਤਾ ਗਿਆ ਡਾਟਾ:<br/> 38, 42, 35, 37,45, 50, 32,43, 43,40, 36, 38, 43, 38, 47<br/>
                ਵਧਦੇ ਕ੍ਰਮ ਵਿੱਚ ਪ੍ਰਬੰਧ ਕਰਨਾ, ਅਸੀਂ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਾਂ<br/>
                32, 35, 36, 37, 38, 38, 38, 40, 42, 43, 43, 43, 45, 47, 50<br/>
                (i) ਇੱਥੇ, 38 ਅਤੇ 42 3 ਵਾਰ (ਸਭ ਤੋਂ ਵੱਧ) ਵਾਪਰਦੇ ਹਨ<br/>
                ਇਸ ਤਰ੍ਹਾਂ ਮੋਡ = 38 ਅਤੇ 43<br/>
                n = (ਟਾਂਕ)<br/>
                ਮੱਧਮਾਨ = (n+1)/2ਵੀਂ ਸੰਖਿਆ = (15+1)/2ਵੀਂ ਸੰਖਿਆ<br/>
                = 8ਵੀਂ ਸੰਖਿਆ = 40<br/>
                ਇਸ ਤਰ੍ਹਾਂ ਬਹੁਲਕ 38 ਅਤੇ 43 ਅਤੇ ਮੱਧਮਾਨ = 40<br/>
                (ii) ਹਾਂ, ਦਿੱਤੇ ਗਏ ਡੇਟਾ ਦੇ ਦੋ ਬਹੁਲਕ ਹਨ ਅਰਥਾਤ 38 ਅਤੇ 43.
                </p>
                </div>
            </div>

            <div className = "chapter1-container1">
                <div className = "chapter1-left">
                <h4>ਅਭਿਆਸ  3.3  ਪ੍ਰਸ਼ਨ 1.</h4>
                <p>
                ਹੇਠਾਂ ਦਿੱਤੇ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਦੇਣ ਲਈ ਬਾਰ ਗ੍ਰਾਫ ਦੀ ਵਰਤੋਂ ਕਰੋ.<br/>
                (a) ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਪਾਲਤੂ ਜਾਨਵਰ ਕਿਹੜਾ ਹੈ?<br/>
                (b) ਕਿੰਨੇ ਵਿਦਿਆਰਥੀਆਂ ਕੋਲ ਪਾਲਤੂ ਜਾਨਵਰ ਵਜੋਂ ਕੁੱਤਾ ਹੈ?
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                ਚਿੱਤਰ ਵਿੱਚ ਦਿੱਤੇ ਬਾਰ ਗ੍ਰਾਫ ਤੋਂ, ਸਾਡੇ ਕੋਲ ਹੈ<br/>
                (a) ਬਿੱਲੀਆਂ ਵਿਦਿਆਰਥੀਆਂ ਵਿੱਚ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਪਾਲਤੂ ਜਾਨਵਰ ਹਨ.<br/>
                (b) 8 ਵਿਦਿਆਰਥੀਆਂ ਕੋਲ ਪਾਲਤੂ ਜਾਨਵਰ ਵਜੋਂ ਕੁੱਤਾ ਹੈ.<br/>
                <img
                src = {ans331}
                alt = ""
                />
                </p>

                </div>

                <div className = "chapter1-center">
                <h4>ਅਭਿਆਸ  3.3  ਪ੍ਰਸ਼ਨ 2.</h4>
                <p>
                ਬਾਰ ਗ੍ਰਾਫ ਪੜ੍ਹੋ ਜੋ ਕਿ ਲਗਾਤਾਰ ਪੰਜ ਸਾਲਾਂ ਦੌਰਾਨ ਕਿਤਾਬਾਂ ਦੀ ਦੁਕਾਨ ਦੁਆਰਾ ਵੇਚੀ ਗਈ
                 ਕਿਤਾਬਾਂ ਦੀ ਸੰਖਿਆ ਦਰਸਾਉਂਦਾ ਹੈ ਅਤੇ ਹੇਠਾਂ ਦਿੱਤੇ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਦਿੰਦਾ ਹੈ:<br/>
                (i) 1989, 1990, 1992 ਵਿੱਚ ਕਿੰਨੀਆਂ ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ?<br/>
                (ii) ਕਿਸ ਸਾਲ ਵਿੱਚ ਲਗਭਗ 475 ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ ਸਨ? ਲਗਭਗ 225 ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ?<br/>
                (iii) ਕਿਸ ਸਾਲ 250 ਤੋਂ ਘੱਟ ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ ਸਨ?<br/>
                (iv) ਕੀ ਤੁਸੀਂ ਦੱਸ ਸਕਦੇ ਹੋ ਕਿ ਤੁਸੀਂ 1989 ਵਿੱਚ ਵਿਕਣ ਵਾਲੀਆਂ ਕਿਤਾਬਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਅੰਦਾਜ਼ਾ ਕਿਵੇਂ ਲਗਾ ਸਕਦੇ ਹੋ?<br/>
                <img
                src = {ans332}
                alt = ""
                />
                </p>
                <p>
                    ਹੱਲ :
                </p>
                <p>
                ਦਿੱਤੇ ਗਏ ਬਾਰ ਗ੍ਰਾਫ ਤੋਂ, ਸਾਡੇ ਕੋਲ ਹੈ<br/>
                (i) ਸਾਲ 1989 ਵਿੱਚ ਵਿਕਣ ਵਾਲੀਆਂ ਕਿਤਾਬਾਂ ਦੀ ਗਿਣਤੀ ਲਗਭਗ 180, 1990 ਵਿੱਚ 490 ਅਤੇ 1992 ਵਿੱਚ ਲਗਭਗ 295 ਸੀ।<br/>
                (ii) 1990 ਵਿੱਚ ਲਗਭਗ 475 ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ ਸਨ। ਸਾਲ 1992 ਵਿੱਚ ਲਗਭਗ 225 ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ ਸਨ।<br/>
                (iii) 1989 ਅਤੇ 1992 ਦੇ ਸਾਲਾਂ ਵਿੱਚ 250 ਤੋਂ ਘੱਟ ਕਿਤਾਬਾਂ ਵਿਕੀਆਂ ਸਨ.<br/>
                (iv) y- ਧੁਰੇ ਤੇ, ਲਾਈਨ ਨੂੰ 10 ਕਿਤਾਬਾਂ ਦੇ 10 ਛੋਟੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਹੈ. <br/>
                ਇਸ ਲਈ, ਅਸੀਂ ਅੰਦਾਜ਼ਾ ਲਗਾ ਸਕਦੇ ਹਾਂ ਕਿ 1989 ਵਿੱਚ ਵਿਕਣ ਵਾਲੀਆਂ ਕਿਤਾਬਾਂ ਦੀ ਗਿਣਤੀ ਲਗਭਗ 180 ਹੈ.
                </p>
                
                </div>

                <div className = "chapter1-right">
                <h4>ਅਭਿਆਸ  3.3  ਪ੍ਰਸ਼ਨ 3.</h4>
                <p>
                ਛੇ ਵੱਖ -ਵੱਖ ਕਲਾਸਾਂ ਵਿੱਚ ਬੱਚਿਆਂ ਦੀ ਸੰਖਿਆ ਹੇਠਾਂ ਦਿੱਤੀ ਗਈ ਹੈ. ਇੱਕ ਬਾਰ ਗ੍ਰਾਫ ਤੇ ਡੇਟਾ ਨੂੰ ਪ੍ਰਸਤੁਤ ਕਰੋ.<br/>
                <img
                src = {ans333}
                alt = ""
                /><br/>
                (a) ਤੁਸੀਂ ਪੈਮਾਨਾ ਕਿਵੇਂ ਚੁਣੋਗੇ?<br/>
                (b) ਹੇਠਾਂ ਦਿੱਤੇ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਦਿਓ:<br/>

                * ਕਿਹੜੀ ਕਲਾਸ ਵਿੱਚ ਬੱਚਿਆਂ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸੰਖਿਆ ਹੈ? ਅਤੇ ਘੱਟੋ ਘੱਟ?<br/>
                * ਛੇਵੀਂ ਕਲਾਸ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਅਨੁਪਾਤ ਲੱਭੋ £ ਉਹ ਅੱਠਵੀਂ ਕਲਾਸ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਦਾ.
                </p>
                <p>
                ਹੱਲ :
                </p>
                <p>
                <img
                src = {ans334}
                alt = ""
                /><br/>
                (a) y- ਧੁਰੇ ਤੇ ਸਕੇਲ 1 cm = 10 ਵਿਦਿਆਰਥੀ ਹਨ<br/>
                (b)<br/>

                * ਪੰਜਵੀਂ ਕਲਾਸ ਵਿੱਚ ਬੱਚਿਆਂ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸੰਖਿਆ ਹੈ, ਅਰਥਾਤ 135.<br/>
                ਦਸਵੀਂ ਕਲਾਸ ਦੇ ਬੱਚਿਆਂ ਦੀ ਘੱਟੋ ਘੱਟ ਗਿਣਤੀ ਯਾਨੀ 80 ਹੈ.<br/>
                * ਅੱਠਵੀਂ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਦੀ ਗਿਣਤੀ = 100<br/>
                ਛੇਵੀਂ ਕਲਾਸ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਅਨੁਪਾਤ<br/>
                <img
                src = {ans335}
                alt = ""
                />
                </p>
                </div>
            </div>
            

        </div>
    )
}

export default Chapter1