let stateBook = {
  booksData: [
     {
       id: 1,
       author: 'Кондратий Либерман',
       titleBook: 'Марсианский Марксизм Ленинизм',
       tags: [1,4]
     },
     {
       id: 2,
       author: 'Софья Журналю',
       titleBook: 'Забастовка робомашин',
       tags: [2]
     },
     {
       id: 3,
       author: 'Тимур Робинзонов',
       titleBook: 'Новая мусорная планета',
       tags: [1,5]
     },
     {
       id: 4,
       author: 'Семен Геройченко',
       titleBook: 'Банда касс самоабслуживания',
       tags: [1,5]
     },
     {
      id: 5,
      author: 'Армен Загребян',
      titleBook: 'много текста очень много текста нереально много текста вообще текста очень много куда еще текста текст ',
      tags: [1,2]
     }
   ],
   tagsData: [
      {tagId: 1,
       tagText: 'Читать',
       isChecked: false
      },
      {tagId: 2,
       tagText: 'На полке',
       isChecked: false
      },
      {tagId: 3,
       tagText: 'Найти',
       isChecked: false
      },
      {tagId: 4,
       tagText: 'В ipad',
       isChecked: false
      },
      {tagId: 5,
       tagText: 'Яндекс диск',
       isChecked: false
      }
   ]
  }

export default stateBook;