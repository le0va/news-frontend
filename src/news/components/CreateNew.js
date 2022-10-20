import { useState } from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Input from "../../shared/components/FormElements/Input";
import './CreateNew.css';

// поля форми для створення новини ініціалізовані цим текстом щоб не заповнювати форму вручну
const titleForExample = 'В Украину пришли первые заморозки: чего ожидать от погоды в ближайшие дни';
const descriptionForExample = [
    'Температура ночью будет немного выше, однако ждать существенного потепления не стоит.[style: subtitle]',
    'В Украину пришли первые заморозки на почве. Их зафиксировали в ночь на 2 сентября в северных регионах.',
    'Заместитель начальника отдела метеопрогнозов Укргидрометцентра Наталья Голеня рассказала, чего ожидать от погоды в Украине на этой неделе.',
    '"Этой ночью уже наблюдались слабые-слабые заморозки на почве, то есть на высоте 2 сантиметра, минус 1 - минус 2 градуса. Это на севере Украины, по северной границе", — отметила Голеня.',
    'Синоптик считает, что на следующую ночь заморозки на почве, пусть и слабые, могут наблюдаться на севере Черниговской и Сумской областей. Там температура воздуха опустится до 1-2 градусов тепла. Однако вскоре ночная температура повысится. Это произойдет за счет того, что появится облачность с юго-западной стороны.',
    'Однако ожидать сильного потепления не стоит. В ближайшие дни в Украине прогнозируется сухая погода, отметила Голеня. Поэтому температура ночью будет снижаться. Все изменится с наступлением дождей. После этого температура будет днем подниматься до 20 градусов.',
    '"Дожди будут после 8-9 сентября. А до этого времени будет сухая антициклональная погода. Поэтому ночью, если будет проясняться, будет прохладно, около 10 градусов тепла", — рассказала Голеня.'
];
const authorForExample = 'Andrei Leovkin';
const image1ForExample = 'https://img.tsn.ua/cached/287/tsn-ed71814124f95cefb3093cdb7dd2dd14/thumbs/404x202/45/e5/fbb8c990bfe0c7f719ec66f04950e545.jpeg';
const image2ForExample = 'https://img.tsn.ua/cached/287/tsn-ed71814124f95cefb3093cdb7dd2dd14/thumbs/1036x648/45/e5/fbb8c990bfe0c7f719ec66f04950e545.jpeg';


function CreateNew(props) {
    const [titleInput, setTitleInput] = useState(titleForExample);
    const titleChangeHandler = (event) => setTitleInput(event.target.value);

    const [descriptionInput, setDescriptionInput] = useState(descriptionForExample);
    const descriptionChangeHandler = (event) => setDescriptionInput(event.target.value);

    const [authorInput, setAuthorInput] = useState(authorForExample);
    const authorChangeHandler = (event) => setAuthorInput(event.target.value);

    const [image1Input, setImage1Input] = useState(image1ForExample);
    const image1ChangeHandler = (event) => setImage1Input(event.target.value);

    const [image2Input, setImage2Input] = useState(image2ForExample);
    const image2ChangeHandler = (event) => setImage2Input(event.target.value);

    const submitHandler = async (event) => {
        event.preventDefault();
        props.onCancel();

        //  http://localhost:5000/api/news
        await fetch('http://store-backend-project.herokuapp.com/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: titleInput,
                description: descriptionInput,
                author: authorInput,
                image1: image1Input,
                image2: image2Input
            })
        });
        props.needUpdateHandler();
    }

    return (
        <Modal
            show={props.show}
            onCancel={props.onCancel}
            onSubmit={submitHandler}
            header='Публікація новини'
            footer={<button type="submit" className="create-new__submit-button">Опубліковати</button>}
        >
            <Input element='input' id='title' type='text' placeholder='Введіть заголовок новини' label='Заголовок' onChange={titleChangeHandler} value={titleInput} />
            <Input element='textarea' id='description' label='Опис' onChange={descriptionChangeHandler} value={descriptionInput} />
            <Input element='input' id='image1' type='text' placeholder='Посилання на картинку' label='Додати картинку (маленьку)' onChange={image1ChangeHandler} value={image1Input} />
            <Input element='input' id='image2' type='text' placeholder='Посилання на картинку' label='Додати картинку (велику)' onChange={image2ChangeHandler} value={image2Input} />
            <Input element='input' id='author' type='text' placeholder='Ваше ім`я' label='Автор' onChange={authorChangeHandler} value={authorInput} />
        </Modal>
    );
}

export default CreateNew;