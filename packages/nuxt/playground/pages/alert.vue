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
        <FyrstAlertRoot
            hide-icon
            variant="info"
            :messages="[{
                title: 'No icon',
                description: 'The icon slot is omitted, including its gap.'
            }]"
        />
    </ShowcaseContainer>
</template>