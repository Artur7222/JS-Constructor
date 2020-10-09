import image from './assets/js1.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks';

const text = "Какой ни будь умный текст, что бы красиво было";

export const model = [
    new TitleBlock ('Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem' 

        }
}), new ImageBlock (image, {
    styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center',
    }, 
    imageStyles: {
        width: '500px',
        height: 'auto',
        'border-radius': '5px'
    },
    alt: 'Это картинка' 
}), new ColumnsBlock ([
    'Мое первое приложение на чистом JavaScript',
    'Хороший, интересный курс настолько без воды, что ничего не понятно, но я стараюсь',
    'JavaScript - это очень просто. Шучу. Это вообще не просто, пойду выпью чего ни будь',
    ], {
    styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
    }
}), new TextBlock (text, {
    styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'text-align': 'center',
        color: '#fff',
        'font-weight': 'bold'

    }
})
];