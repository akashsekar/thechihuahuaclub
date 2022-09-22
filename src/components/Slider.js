import React from 'react'
import './slider.css'

const slider = () => {
  return (
    <div className='slider'>
        <div className="slide__track">
            
            <a href="https://www.youtube.com/watch?v=3Z780EOzIQs"><div className="slide" href='google.com'>
                < img src="https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e475d4wek9ptxfionls64nl47f8gj7mokgu66iukyrr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT1</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/5369203/screenshots/13943143/media/9b3693398e0e4d58ed262900012f47db.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT2</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://media4.giphy.com/media/Wmau3iOsVQoKdLgQcJ/giphy.gif?cid=ecf05e47s3llpcx3b9520uyxptjyyvgwnwf6xdgifmscumsr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT3</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/1792215/screenshots/17014529/media/e86f4867baf15aa551dc07b88838deb1.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT4</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/4778017/screenshots/18316961/media/a405b9c5a6596624ead9154e679726a0.jpg?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT5</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="data:image/jpeg;base64,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" alt="dog" />
                <h3>NFT6</h3>
            </div>
            </a>
            



            <a href="https://www.youtube.com/watch?v=3Z780EOzIQs"><div className="slide" href='google.com'>
                < img src="https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e475d4wek9ptxfionls64nl47f8gj7mokgu66iukyrr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT1</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/5369203/screenshots/13943143/media/9b3693398e0e4d58ed262900012f47db.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT2</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://media4.giphy.com/media/Wmau3iOsVQoKdLgQcJ/giphy.gif?cid=ecf05e47s3llpcx3b9520uyxptjyyvgwnwf6xdgifmscumsr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT3</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/1792215/screenshots/17014529/media/e86f4867baf15aa551dc07b88838deb1.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT4</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/4778017/screenshots/18316961/media/a405b9c5a6596624ead9154e679726a0.jpg?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT5</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="data:image/jpeg;base64,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" alt="dog" />
                <h3>NFT6</h3>
            </div>
            </a>



            <a href="https://www.youtube.com/watch?v=3Z780EOzIQs"><div className="slide" href='google.com'>
                < img src="https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e475d4wek9ptxfionls64nl47f8gj7mokgu66iukyrr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT1</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/5369203/screenshots/13943143/media/9b3693398e0e4d58ed262900012f47db.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT2</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://media4.giphy.com/media/Wmau3iOsVQoKdLgQcJ/giphy.gif?cid=ecf05e47s3llpcx3b9520uyxptjyyvgwnwf6xdgifmscumsr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT3</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/1792215/screenshots/17014529/media/e86f4867baf15aa551dc07b88838deb1.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT4</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/4778017/screenshots/18316961/media/a405b9c5a6596624ead9154e679726a0.jpg?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT5</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="data:image/jpeg;base64,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" alt="dog" />
                <h3>NFT6</h3>
            </div>
            </a>
            



            <a href="https://www.youtube.com/watch?v=3Z780EOzIQs"><div className="slide" href='google.com'>
                < img src="https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e475d4wek9ptxfionls64nl47f8gj7mokgu66iukyrr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT1</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/5369203/screenshots/13943143/media/9b3693398e0e4d58ed262900012f47db.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT2</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://media4.giphy.com/media/Wmau3iOsVQoKdLgQcJ/giphy.gif?cid=ecf05e47s3llpcx3b9520uyxptjyyvgwnwf6xdgifmscumsr&rid=giphy.gif&ct=g" alt="dog" />
                <h3>NFT3</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/1792215/screenshots/17014529/media/e86f4867baf15aa551dc07b88838deb1.png?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT4</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="https://cdn.dribbble.com/users/4778017/screenshots/18316961/media/a405b9c5a6596624ead9154e679726a0.jpg?compress=1&resize=1000x750&vertical=top" alt="dog" />
                <h3>NFT5</h3>
            </div>
            </a>
            <a href="#">
            <div className="slide">
                <    img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGBgYGBgZGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQhISExNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0P//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EADsQAAIBAgUBBQcCBgAGAwAAAAECAAMRBAUSITFBBiJRYXETMoGRobHRwfAHFEJScuEjNGKCwvEVJDP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIREBAQEBAAICAwEBAQAAAAAAAAERAiExA0ESMlEEIhP/2gAMAwEAAhEDEQA/APKqdMmOUqENSoxymkze/wAfDOYSNKAenLd6cTr0oDrlWMIJoasLRVjHHD8tzwG4giIZpEiVHD1GkWO0Ei1JZY4ZI9QKiSNRI6lGCqU4WiKxqe8aw6wop3jdKhJ1f4tJTmmpRxEmnSGlYrnoSPsZYFJr2UrUYrGowZw8tzQmHDxWqisp4eMpQEaVJsLJXC4oCTVAIdhIEQPBEqAQ61xK9psCAw81YQL1R4xcrBMsCsOe185kRtMgQiNG6YilJY2kVfR4KFga1OMoJtkkledc9iqUrnWdBjKMpa9OxlR5/wDo4zyARIkQtoahgncEoCSOgHTylvP6ml6cs8KRK96LKbEEHwIt94Sm5EGdi7R4J2iaVTD0wSYWlIYpU5Y0ki+HpywRJLWBFJB0jWmRZYDCbJNBI0UkdMEXlBVmOsJabFIsbAEnylFhRkkFWWGJwpSwPNt/LygFpydaSF2SQIjTpAskD0taEUSWmStAagRBOsYIg2WBUDRMhtMyBYWWsIVcVKwNCqInvz5NWtPExlawlQimNIDFYuUfEG4lNiklw4IG8qsa8I5v9Mn4kLTtOwOCZg9T+lSoAKggvzfnw+/lONJnqvYGgP5FSOWdyduoNh9AJTyOvB6rl9OuuisiNtsyizL8ROC7SdlHwx1LdqZ4a3HkZ6zhsONN9r+o2+s1iMIHUo6hlI3X9QOkeM9eG06Ufw9GXnaDs4aD3TvI3un/AMT5weBymo5AVSSfpEqAUktGQIzicA6EIwINt4CBxqQaFCHwljhMldwSFO1vrEpTzJcZjkj0uRDZZ2depYt3VPztfwgSowuCeobIpP2HqZ12Cy5KC9C1u85B58FHgJcUsLToppS+2x0jnyvE8Z3u6UbfxPT/ALR+sqT+s71/HKZxQs4IFlYbbdRz+kQ9nOq7QYe1JD1VrD0InOARVXN8E3pxd0li6xd6cRq8pN6YwyTRWMA6ZEpDGDJgENM1CTIBQlbQqMJEGaIg9nc9H6TRpZVU3ttG6VWJpz3sHxVTaUOJqXMexdWVj7mEcn+nv6bUz1L+G2MBwr0zylQn0DAH73nlyrPQv4dU7JX6XCaT0LXIA+sbzL5ehYauE94nfj98R3EJdQ68eNzKWqjomt7DTyD084/lmP7viOtr7+kuIs+y2KwwdSrrdGIB8RvyPjKzKafsa7I3O2k9ChNwZ0DlTcrwf3xA4nBCoqvw6bqeu/T0kU+aw5QtV2dx5L6QK9m6W4KDylxhiCoFiDCqu/OwG/pvEryqqGU0120L3Rtt1jhUKGsBcgn5RlxsbbbbeNpV42rbjqNv1gDFakrWYi5Itb7Qa0xv0HBPp0AExdQTWx529JugBsNVz9h4SuZqeqJdBzcnoP6gPTkSFa19lsPEnn4dDJuUX3mVfDe5v+ZpqtMCwub+XdM0Zxy3a2v3ET/qJPwE5gGXna2ohdQp90e74XlADMr7a8+kmgnhTIlYGXYQTCMMsjogelXWDKxxkg2pwwtL6ZkNom4YWuVSrCapXCpCrUhj0Ofnn2c1Tft4i1WaV7wwf+/nIYqVLyCCaUQiLBl8t2bREWeu/wAPsD/9e9hu4O3go/M8mpISZ7T/AA5UjD/EwcdJZ0mJd3RQNDAgEenW/wAYzkNAowOrustxzzaxFvIiN55jxScNY2JsQOdxyPGRwNPV3rkKdxfbf06GPRPS0egSbE2B484ZVAAA4G3ylfUfi+9obCuzcceJG/hF1RIsaewhGUhQOpO/oTxIKnHp+JLEg6bg7i59bSTZrvcjxt9P9yrVAb36G3xEsUWxYjiwsP38Ii6WqMOjDu+FxYH6kwMxYadPz/MosRUaiGszNybFrAeA85Zvfm/6WlXj8uNQEv04UkD4/u3WVzUdRV1qFSrd3bpsqiwBP1lnkiVxU0FP+GBfUx3+Ull2FZVNxZRuAOTbgS6yqsH7x/1L9k8/7X0NGINhYEAylVp1Pbqmxq6za1rD4TlBIvtfPocPNloGavACkyDGR1TTGAbvIsZreZaA1GZJaZkBrz282DNWmxKKakIZFgklhhKV4q156k8pUaBMcpYSO4bDR+nh+kMLru9A5ZlZdwAOTaex5JhRQpKg8N/Wcp2Yy1iQ1uPX7TuqVPqYmdUmY5d7Rw5/pNwOt5JmsN9vzL2ogtxK7FU/3aIRXKRff4CWOCS5228R8/38Igi7356eNpaYamVBN73HXpFPKr4hlXu4324+UMAH1KPG35+94lh071/35yeEr2cjx3v5gcfH9I4VTQbnwv8AaBcarleh+djc/WbqVtKOfl+IthmtQBvc2uT0Jtcm/rFBf6NiaepSy+A3+W8Qd7d62/75MtsGhKc/GVWMphTYC/l1v+eI7Cl+k0raxcfSL4bWHuoso55HymsNhtGw3F979PSWdEgbHmVosUvaPBiqmoe8Jw9XD6eZ6RjKYsbbfczi80pEObwpRTaJErDu0A7xKQabRLwbPCU3jhWj+zg2pQyvDIl5WJ0h7Oblh7CZAPKDMhXWQAiX1zlTpcy5wcp6Y3nR5NgGqEAAxWq5iywSM5AAnXZRknDMIxkmSBACeZ0CADYRaLh7KqIVdhLILAYZLLtDG56QR9o1ntvK2rV1HSJZ4mh3ZVU8Bd9yQPAEiK6cxs0FUbkD1P5jmAF9gwPoQZSdocrT29MlFK6GtqsbPdbGx521D4zlsfhNeLw+mjYoWc1gxC6SunQFAte9m1XvtaRe5z1ln1qvx3mX+16JVwzqSRuD9DE0Qgki+1/j4fiTyDONdVsM5LME1qxubi9mUk9eD8/CWj4XS3lK5s65liet5uUklC6WP75v95XK+hQnJOwA8j85dO+lSSeAT8LTmMXif5PDPjHGpz3aSn+52sgPqbXPheVIVrqaQ0U9yBYb32A+MrxodtiDfk3+1tp5xn9Oo9Ok1QvXqvVBqOXf2aIV9xaCnTpB687C95eZVly68OippZmJbTtdACCTbzKyL8nNsk86rnjrzvjHTV6ARhpO3gPzCsdrn9/COYjABTdB89/kZX4ksb7WA8v0lpBert+7zks8qd65ly7NbTe259ZzmeLptyZRKaq8WZ5CrVi71ZKhzUk6byv9rGKVSOFVpTN5YYcSrwz3M6XLsPcCUgDQZuXP8rNQ0Y8KqNNU1vBjcy7yjLy7AW5k3w138rreVZS7sABPWOz2SCkguN5Ps5ki00BI3nSCnENwvptNou8I4tI0TvEFthjYcRynEaT7WhvaEcS0DVTttENdjGNZJvBOg68RURHG4VMSmh9rG6MOUYcESjq5Bjh3UrUXHR2Qh/iBteX63/HSFo1SDIvM69rnV59OUy3Ia+GrJVqOHZmBdlBN+hH/AEruZ3OIA23lfmVQkADxHyvNLWLEfsSpJPET1b15rWNS6N5i3znOdscrfFLhcOnu6tb827gVRqPT3jvLfGViuo3vfp6eEFl1Ylgb8XH1/wBQE/qvodksSllWsmkAe+C5vbcjYbX6S8ybJVw5LsxqVCLFzsAP7VHQSzFXaDapaKc8y7Id66sy1J6tpTYypc2+JjeIqgck/v0lFiMQKjdwcHpxLiAmpKG1Eznu1Ld3a06V8NY3NtR+k4ntjWa9rLYecd9CORxNfeKtXgq7+cVd5CzZqw1KvKv2klSrWMcKuuy03Ind5MosLzzrK8Ta07LK8yAtvKk1F8Ot0CZK3/5NfGZH+Ja8Vw2C3ncdk8uu4YjYShoU956N2Ww9kBImbp68R0WGFhGFa5gUSGp8wZh4lYLDDeHxRgcNzF9n9HVa0aS53i5G0nRqHiVEUzTtNugmgL8bSVyOZRACmTwPn+IVKcIAPH5QqqBF+I0rWoX6SrxFfQ+k7335H1nQqJQZ/lLMGdCeCT5db2isXxluUhmeNsmoiwts1th43tx1jvZ6gWQP0ZQenXc3+f0nG4LDVsU60luBfdiWIVRySOvlPR8qy1MNSFNCSBclmN2YnkmEmq+STnxrC4XniL4rFKguTt47fCGZAx3O1+B1HmZzPaaqoIUNp1GxW7XYdOJX4sfyODNlrEoiNcbatrA+I3ksFgWQkta58ITK8MqIpUWvGMwxi0l1NGFTnWJSmjF/D4zxrPMcGckMSL7XnU9ss6NS4X3Z5riGN+sXV+hIk9aBZ4MmRixWp6ptWg5tYDV1gKx4l7hsSROawbS8w7xwquf50+MyIapkrSyCZYmpwPOeo5bR0oPSec9maWpxPT8OLACZNuqZpLDcQdNpIvBIGJW8HhhYxipxBptEDoE1a02puJIJGSSvaEFTbcbwaiE0CVKmwRD8JLX4feJvW088SCY8DY8x6WHf5q3Q/KY+JYjug/KDSqDxM9uR/qVKVVuQYSrSNUuB33LC3IXoPv8AOM4zMdIIIPyhHzC3AN5UV3qVW6KvnzaPwLbQXz8udFJSfG/dHnb8SGGych/aOxJY7qTdR6A8Q+IRMMjOouYJ801oCNmt9YiOYnOaKKyuwVh067Tjs4xbYhd2sn9Dre3o68g+cNispaqxduT9D4eklRwvswdPFrMOnmDAPOM0oujEFvrsfnzKLEIbzss8ogk6Nx4HlfECczWpzOtYp2E1Gq1KLMscpWIySiaAjeHpXjIxhUlrTgsNh477G0AHqMyT0zIg6vsZTF7z0Gku04rsZhrC87ZGtJX17TBm15mIZOFKNuNoIRgbiA02MDM0eIa8DTYDkgRTE5vTUkA6mHQbw3Blp5mtBVMxReWHpKKvjKlT3e6PrF/5dR3na8m9fxpz8Vvs5iccajADiVdXFXqhEN9O7H9IDE4p3vTw45Ni/hLXK8qFIDVuzbkydtX/AMzxDVTGlFFztt8zJ4DO1d2Qcr9ZS50e+f7Ka6z5udlWVnZav7TFOw4lc9VHfEzY7s1idrWieFVtba+OnpLN1EwoCLzTXPhPFoGUrpuDK/AZVoNzuPtLpdpqtUCi8YV2MUCVNZLKzHw38/OPOxqel5X5/iAlMjylB5tmtS1RvC//AKMQdr82PnwZvGVtTn1gQ0hcAr0x0iFSjLYi8G1G8DVdOjvLXC0ISjhZZYfCwSJhaMaeltJ0qVoyaW0NJWezmR/2BmQDouxj3S07BBOA7CuTPQkWSvr20rSTNNlRJaRChtDEczx2juqLtb5SwpiUGJGp3PS/2k25FczarkWo7HW7W6AbCPYfC6eLfrAVsQFH2tyfSB/4jC79xeg/qPrM28kno6MQNWhBqbr4D1Mr6WHfEVTTv3VPfI+wh0xaItkF2PQc/GXfZrLzTQs3vOdR+MrmbUfJ1kP4LLEpqAigCIZrihT1v/Yu3megl9echmz6yyEbs/0U3/EvrxGfx+eiuaqRhgL9521MfE2uZTfw9/8A0c9T+Zb9o300Tbou3xlP/Dq4dvMSOWnyPSwpIkqa9IQvYQb1BsZs5g6idZWYioS2npLeu4tKmqtwT1jkK1PUqptPPe2GYf03l5m2ZMgM84zvG6ySTHaJFW77yStFdcIjSWhpDGqNO8WoLeW+FowIXDYaWlDCyWEoS2w9CCSK4WFFGWa0Zj0owrfZTI57OZAFuwY7s71RtOP7GYfSgnYqYldXyi4mkeSYyJEmiMqVtKlvKc7WxIRCWNuvmZZ5m3dA8TKinhQ7s77qosB59TM+mvMByXvu9V+F2UdFFrk+sq+0PaLU3s6O541fiLZximSi4Q2Duw9Re0rOy+F1VVJFxeEi71juOyGTEAVKhux8ek7anYbSvwxAUAbbQ+qaTw5+rpy4nJ5mAKz/AOJt8SJ0AqGc5nlUCqo/uBX7GLr0v4v2U3aWuPZHzFpLsKlrmA7RIAgHiYbsg9tukXKvkruy97wKgkGERdVrTdRwmxmuOdB1JW8VrYhCCL2MdRwNuhnJdojzY2PlKgUfaqvpvbeeb4+tcmdNmjuwIJvORxSEGT0cQDxmgt4kglxgKF4lafwWHnQYLCwWX4SdDhsNaORNqOHw9o/TSYqQqx4SarNOkKs0wgC+iZCWm4gH2Ve9MTpVacl2OqXpidQDEqpsZiTBNqJJxV5p74HltE691VvSdBiMGrjfkcHwlTi8rqnZSCLjn1k2NOepI5zNOzjiiu+ojf57wnYzClWNxvPQEpBkCsOm8RbLQh1KLSpE3oU7QibxfWRyJJa5vHqcNOs5nOKd8SnkpPzl/wC3nNY5y2JJPRQJPXpXx/sTzujqv1AldlZKmw6y9w4Do/8AkZUphyri3Qx88+IXXW2uvybG3TfkbGazWtqW4MqcOxW58eYygLczWMqhjcc2gEcictmOZs+x5nSZkVCEeU5ahRBJJjEVVcixvOXzIAnadFnbhb2M5xELtJ6VEcJhbzpsswPEhluB42nTYHDAW2kwD4HC2EtadOQopGVMokTTg9NoxcQZjDStNlpoSDG0Alebi/tZkAV7G+4J1omTJCr7TEmsyZJODpNiZMgBUhKkyZHCJVYuZkyJSQnPY7/mG/xH6zJkXXo/j/ZmU+43+TQf9XxmTJpPUZ39qYeOYfiamSoVU+cdZRUuD6mZMj+w5nPuZXYHmZMkdHHX5ZwJe0JkyEI/ThDMmRhgmTJkYaWaq8TJkAVmTJkEv//Z" alt="dog" />
                <h3>NFT6</h3>
            </div>
            </a>
            


            
            
        </div>
        
    </div>
  )
}

export default slider