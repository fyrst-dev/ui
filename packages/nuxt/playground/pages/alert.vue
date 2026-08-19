<template>
    <ShowcaseContainer>
        <FyrstAlertRoot 
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlertRoot 
            variant="danger"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlertRoot 
            variant="success"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
        <FyrstAlertRoot 
            variant="warning"
            border-size="xl"
            :messages="[{
                title: 'test',
                description: 'this is a test alert'
            }]"
        />
    </ShowcaseContainer>
</template>