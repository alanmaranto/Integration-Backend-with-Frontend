import gravatar from '../../utils/gravatar';

test('Gravatar function test', () => {
    const email = 'alanmaranto@gmail.com';
    const gravatarUrl = 'https://gravatar.com/avatar/f2f76f81841c48b8344b744065463e49';
    expect(gravatarUrl).toEqual(gravatar(email))
})