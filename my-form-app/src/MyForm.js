import React, { useState } from 'react';
import './styles.css';

const MyForm = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [text, setText] = useState('');
  const [checkedItems, setCheckedItems] = useState({});
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState({});

  // Изменение для первого числа
  const handleChangeNumber1 = (e) => {
    setNumber1(e.target.value);
  };

  // Изменение для второго числа
  const handleChangeNumber2 = (e) => {
    setNumber2(e.target.value);
  };

  // Изменение текстового поля
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // Изменение для чекбоксов
  const handleCheckboxChange = (e) => {
    setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  // Изменение поля времени
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  // Валидация формы
  const validateForm = () => {
    let formErrors = {};
    if (number1.length < 5) {
      formErrors.number1 = 'Первое число должно содержать не менее 5 цифр.';
    }
    if (number2.length > 8) {
      formErrors.number2 = 'Второе число должно содержать не более 8 цифр.';
    }
    return formErrors;
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Форма успешно отправлена!');
      // Здесь можно обработать данные формы
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>Форма для заполнения</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Первое число (не менее 5 цифр):
            <input
              type="text"
              value={number1}
              onChange={handleChangeNumber1}
              maxLength="8"
              placeholder="Введите минимум 5 цифр"
            />
          </label>
          {errors.number1 && <span style={{ color: 'red' }}>{errors.number1}</span>}
        </div>

        <div>
          <label>
            Второе число (максимум 8 цифр):
            <input
              type="text"
              value={number2}
              onChange={handleChangeNumber2}
              maxLength="8"
              placeholder="Введите максимум 8 цифр"
            />
          </label>
          {errors.number2 && <span style={{ color: 'red' }}>{errors.number2}</span>}
        </div>

        <div>
          <label>
            Текстовое поле:
            <input
              type="text"
              value={text}
              onChange={handleChangeText}
              placeholder="Введите текст"
            />
          </label>
        </div>

        <div>
          <label>Выберите опции:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="option1"
                checked={checkedItems.option1 || false}
                onChange={handleCheckboxChange}
              />
              Опция 1
            </label>
            <label>
              <input
                type="checkbox"
                name="option2"
                checked={checkedItems.option2 || false}
                onChange={handleCheckboxChange}
              />
              Опция 2
            </label>
          </div>
        </div>

        <div>
          <label>
            Время:
            <input
              type="time"
              value={time}
              onChange={handleChangeTime}
            />
          </label>
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default MyForm;