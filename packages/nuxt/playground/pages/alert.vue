<template>
    <ShowcaseContainer>
        <FyrstAlert 
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlert 
            variant="danger"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlert 
            variant="success"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlert 
            variant="warning"
            border-size="xl"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
    </ShowcaseContainer>
</template>