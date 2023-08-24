const RightSide = () => {
    return (
        <div className="right-side">
            <h2 className="h2 right-side__title">Отправить сообщение</h2>
            <form className="right-side__form" action="">
                <input className="right-side__input" placeholder="Имя" type="text" required/>
                <input className="right-side__input" placeholder="Эл.адрес" type="email" required/>
                <textarea className="right-side__textarea" name="" id="" cols="30" rows="13" placeholder="Сообщение" required ></textarea>
                <div className="btns__container">
                    <button className="right-side__btn" type="submit">
                    Отправить сообщение
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default RightSide;