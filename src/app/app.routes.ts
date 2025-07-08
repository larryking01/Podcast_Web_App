import { Routes } from '@angular/router';
import { AdminLogin } from './features/admin/admin-login/admin-login';
// import { Episodes } from './features/public/episodes/episodes';
// import { EpisodeDetails } from './features/public/episode-details/episode-details';
// import { AdminPlaylists } from './features/admin/admin-playlists/admin-playlists';
// import { Playlists } from './features/public/playlists/playlists';
// import { CreateTeam } from './features/admin/admin-team/create/create';
// import { ViewTeam } from './features/admin/admin-team/view-team/view-team';
// import { EditTeam } from './features/admin/admin-team/edit-team/edit-team';
// import { TeamDetails } from './features/admin/admin-team/team-details/team-details';
// import { ViewPlaylists } from './features/admin/admin-playlists/view-playlists/view-playlists';
// import { CreatePlaylist } from './features/admin/admin-playlists/create-playlist/create-playlist';
// import { EditPlaylist } from './features/admin/admin-playlists/edit-playlist/edit-playlist';
// import { DeletePlaylist } from './features/admin/admin-playlists/delete-playlist/delete-playlist';







export const routes: Routes = [
    {
        path: 'admin/login',
        component: AdminLogin,
        title: 'Admin Login'
    }, 
        {
        path: 'admin/dashboard',
        loadComponent: () => import('./features/admin/admin-dashboard/admin-dashboard').then( m => m.AdminDashboard ),
        title: 'Admin dashboard'
    },
    {
        path: 'admin/confessions',
        loadComponent: () => import('./features/admin/admin-confessions/admin-confessions').then( m => m.AdminConfessions ),
        title: 'Admin view all confessions'
    },
    {
        path: 'admin/playlists',
        children: [
            {
                path: 'create-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/create-playlist/create-playlist').then( m => m.CreatePlaylist ),
                title: 'Admin create playlists'
            },
            {
                path: 'view-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/view-playlists/view-playlists').then( m => m.ViewPlaylists ),
                title: 'Admin view playlists'
            },
            {
                path: 'edit-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/edit-playlist/edit-playlist').then( m => m.EditPlaylist ),
                title: 'Admin edit playlists'
            },
            {
                path: 'delete-playlists',
                loadComponent: () => import('./features/admin/admin-playlists/delete-playlist/delete-playlist').then( m => m.DeletePlaylist ),
                title: 'Admin delete playlists'
            }
        ]
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
        loadComponent: () => import('./features/public/episode-details/episode-details').then( m => m.EpisodeDetails ),
        title: 'Episode details'
    },
    {
        path: 'episodes',
        loadComponent: () => import('./features/public/episodes/episodes').then( m => m.Episodes ),
        title: 'Episodes'
    },
    {
        path: 'playlists',
        loadComponent: () => import('./features/public/playlists/playlists').then( m => m.Playlists),
        title: 'Playlists'
    }

];
