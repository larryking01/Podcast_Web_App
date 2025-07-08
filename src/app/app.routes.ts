import { Routes } from '@angular/router';
import { Episodes } from './features/public/episodes/episodes';
// import { AdminPlaylists } from './features/admin/admin-playlists/admin-playlists';
// import { Playlists } from './features/public/playlists/playlists';
// import { CreateTeam } from './features/admin/admin-team/create/create';
// import { ViewTeam } from './features/admin/admin-team/view-team/view-team';
// import { EditTeam } from './features/admin/admin-team/edit-team/edit-team';
// import { TeamDetails } from './features/admin/admin-team/team-details/team-details';



export const routes: Routes = [
    {
        path: 'admin/login',
        loadComponent: () => import('./features/admin/admin-login/admin-login').then(m => m.AdminLogin),
        title: 'Admin Login'
    }, 
    {
        path: 'admin/confessions',
        loadComponent: () => import('./features/admin/admin-confessions/admin-confessions').then( m => m.AdminConfessions ),
        title: 'Admin view all confessions'
    },
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./features/admin/admin-dashboard/admin-dashboard').then( m => m.AdminDashboard ),
        title: 'Admin dashboard'
    },
    {
        path: 'admin/playlists',
        loadComponent: () => import('./features/admin/admin-playlists/admin-playlists').then( m => m.AdminPlaylists),
        title: 'Admin playlists'
    },
    {
        path: 'admin',
        children: [
            {
                path: 'team',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./features/admin/admin-team/view-team/view-team').then( m => m.ViewTeam ),
                        title: 'View all team members'
                    },
                    {
                        path: 'create-team-member',
                        loadComponent: () => import('./features/admin/admin-team/create/create').then( m => m.CreateTeam ),
                        title: 'Add team member'
                    },
                    {
                        path: 'edit-team-member/:id',
                        loadComponent: () => import('./features/admin/admin-team/edit-team/edit-team').then( m => m.EditTeam ),
                        title: 'Edit team member'
                    },
                    {
                        path: 'team-member-details/:id',
                        loadComponent: () => import('./features/admin/admin-team/team-details/team-details').then( m => m.TeamDetails ),
                        title: 'Team member details'
                    }
                ]
            }
        ]
    },
    {
        path: 'confessions',
        loadComponent: () => import('./features/public/confessions/confessions').then( m => m.Confessions ),
        title: 'Confessions'
    },
    {
        path: 'episodes/:id',
        component: Episodes,
        title: 'Episode details'
    },
    {
        path: 'playlists',
        loadComponent: () => import('./features/public/playlists/playlists').then( m => m.Playlists),
        title: 'Playlists'
    }



];
