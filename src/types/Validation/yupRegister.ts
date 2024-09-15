import * as yup from 'yup';

export type RegisterUserFormData = yup.InferType<typeof registerUserSchema>;

export const registerUserSchema = yup.object().shape({
    name: yup
        .string()
        .required('이름을 입력해주세요.')
        .matches(/^[가-힣]{2,10}$/, '이름 형식에 맞지 않습니다.(한글 2~10자)'),
    email: yup
        .string()
        .required('이메일을 입력해주세요.')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|kr|net|org|edu)$/,
            '이메일 형식에 맞지 않습니다.',
        ),
    phone: yup
        .string()
        .required('전화번호를 입력해주세요.')
        .matches(/^\d{11}$/, '전화번호 형식에 맞지 않습니다.'),
    address: yup.string().required('주소를 입력해주세요.'),
    addressDetail: yup.string().required('상세주소를 입력해주세요.'),
});
